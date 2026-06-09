from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base
from app.routers import contact, newsletter, careers, blogs

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Set CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Startup event to create tables if they do not exist
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        # Automatically creates tables in PostgreSQL (or sqlite for fallback/testing)
        await conn.run_sync(Base.metadata.create_all)

# Include API Routers
app.include_router(contact.router, prefix=settings.API_V1_STR)
app.include_router(newsletter.router, prefix=settings.API_V1_STR)
app.include_router(careers.router, prefix=settings.API_V1_STR)
app.include_router(blogs.router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {
        "message": "Welcome to Acceleron Solutions Enterprise API",
        "docs": "/docs",
        "status": "healthy"
    }
