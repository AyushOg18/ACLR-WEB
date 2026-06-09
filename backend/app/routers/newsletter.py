from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.database import get_db
from app.models import NewsletterSubscriber
from app.schemas import NewsletterSubscribe, NewsletterSubscriberResponse

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

@router.post("/subscribe", response_model=NewsletterSubscriberResponse, status_code=status.HTTP_201_CREATED)
async def subscribe(payload: NewsletterSubscribe, db: AsyncSession = Depends(get_db)):
    # Check if already exists
    stmt = select(NewsletterSubscriber).where(NewsletterSubscriber.email == payload.email)
    existing = (await db.execute(stmt)).scalar_one_or_none()
    
    if existing:
        if not existing.is_active:
            existing.is_active = True
            await db.commit()
            await db.refresh(existing)
            return existing
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already subscribed."
        )

    db_obj = NewsletterSubscriber(email=payload.email, is_active=True)
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/subscribers", response_model=List[NewsletterSubscriberResponse])
async def list_subscribers(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(NewsletterSubscriber).order_by(NewsletterSubscriber.created_at.desc()))
    return result.scalars().all()
