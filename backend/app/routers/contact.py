from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.database import get_db
from app.models import ContactSubmission
from app.schemas import ContactSubmissionCreate, ContactSubmissionResponse

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("/", response_model=ContactSubmissionResponse, status_code=status.HTTP_201_CREATED)
async def create_submission(payload: ContactSubmissionCreate, db: AsyncSession = Depends(get_db)):
    db_obj = ContactSubmission(**payload.dict())
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/", response_model=List[ContactSubmissionResponse])
async def list_submissions(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ContactSubmission).order_by(ContactSubmission.created_at.desc()))
    return result.scalars().all()
