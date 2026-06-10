from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

# Shared properties
class ContactSubmissionBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: str
    company: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    service: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=5)

class ContactSubmissionCreate(ContactSubmissionBase):
    pass

class ContactSubmissionResponse(ContactSubmissionBase):
    id: int
    created_at: datetime

    model_config = {
        "from_attributes": True,
    }


# Newsletter Schemas
class NewsletterSubscribe(BaseModel):
    email: str

class NewsletterSubscriberResponse(BaseModel):
    id: int
    email: str
    is_active: bool
    created_at: datetime

    model_config = {
        "from_attributes": True,
    }


# Careers Schemas
class CareersApplicationCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: str
    phone: str = Field(..., min_length=5, max_length=50)
    position: str = Field(..., min_length=2, max_length=255)
    message: str = Field(..., min_length=5)
    resume_url: Optional[str] = None

class CareersApplicationResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    position: str
    message: str
    resume_url: Optional[str]
    created_at: datetime

    model_config = {
        "from_attributes": True,
    }


# Blog Schemas
class BlogPostBase(BaseModel):
    title: str = Field(..., min_length=5, max_length=255)
    slug: str = Field(..., min_length=5, max_length=255)
    excerpt: str = Field(..., min_length=10)
    content: str = Field(..., min_length=10)
    category: str = Field(..., max_length=100)
    read_time: str = Field(..., max_length=50)
    image_url: Optional[str] = None
    is_published: bool = True

class BlogPostCreate(BlogPostBase):
    pass

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    read_time: Optional[str] = None
    image_url: Optional[str] = None
    is_published: Optional[bool] = None

class BlogPostResponse(BlogPostBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {
        "from_attributes": True,
    }
