from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List, Optional
from app.database import get_db
from app.models import BlogPost
from app.schemas import BlogPostCreate, BlogPostUpdate, BlogPostResponse

router = APIRouter(prefix="/blogs", tags=["blogs"])

@router.post("/", response_model=BlogPostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(payload: BlogPostCreate, db: AsyncSession = Depends(get_db)):
    # Verify slug uniqueness
    stmt = select(BlogPost).where(BlogPost.slug == payload.slug)
    existing = (await db.execute(stmt)).scalar_one_or_none()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A blog post with this slug already exists."
        )
    
    db_obj = BlogPost(**payload.dict())
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/", response_model=List[BlogPostResponse])
async def list_posts(published_only: bool = True, db: AsyncSession = Depends(get_db)):
    stmt = select(BlogPost)
    if published_only:
        stmt = stmt.where(BlogPost.is_published == True)
    stmt = stmt.order_by(BlogPost.created_at.desc())
    
    result = await db.execute(stmt)
    return result.scalars().all()

@router.get("/{slug}", response_model=BlogPostResponse)
async def get_post_by_slug(slug: str, db: AsyncSession = Depends(get_db)):
    stmt = select(BlogPost).where(BlogPost.slug == slug)
    post = (await db.execute(stmt)).scalar_one_or_none()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found."
        )
    return post

@router.put("/{post_id}", response_model=BlogPostResponse)
async def update_post(post_id: int, payload: BlogPostUpdate, db: AsyncSession = Depends(get_db)):
    stmt = select(BlogPost).where(BlogPost.id == post_id)
    post = (await db.execute(stmt)).scalar_one_or_none()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found."
        )
    
    update_data = payload.dict(exclude_unset=True)
    for key, val in update_data.items():
        setattr(post, key, val)
        
    await db.commit()
    await db.refresh(post)
    return post

@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(post_id: int, db: AsyncSession = Depends(get_db)):
    stmt = select(BlogPost).where(BlogPost.id == post_id)
    post = (await db.execute(stmt)).scalar_one_or_none()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blog post not found."
        )
    await db.delete(post)
    await db.commit()
    return None
