import os
from pydantic import BaseSettings
from typing import List
from dotenv import load_dotenv

# Resolve path relative to app/ directory
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(base_dir, ".env"))

class Settings(BaseSettings):
    PROJECT_NAME: str = "Acceleron Solutions API"
    API_V1_STR: str = "/api/v1"
    
    # Database configuration
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/acceleron_db"
    
    # CORS Origins
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "https://acceleronsolutions.io"]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True

settings = Settings()

