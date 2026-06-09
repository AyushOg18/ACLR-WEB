from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.database import get_db
from app.models import CareersApplication
from app.schemas import CareersApplicationCreate, CareersApplicationResponse

router = APIRouter(prefix="/careers", tags=["careers"])

@router.post("/apply", response_model=CareersApplicationResponse, status_code=status.HTTP_201_CREATED)
async def submit_application(payload: CareersApplicationCreate, db: AsyncSession = Depends(get_db)):
    db_obj = CareersApplication(**payload.dict())
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/applications", response_model=List[CareersApplicationResponse])
async def list_applications(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CareersApplication).order_by(CareersApplication.created_at.desc()))
    return result.scalars().all()
