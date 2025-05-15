from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os

# Load environment variables from .env file or container environment
load_dotenv()

# Get the database URL from environment variable
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./students.db")

# Create engine conditionally based on the type of database
if SQLALCHEMY_DATABASE_URL.startswith("sqlite"):
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        connect_args={"check_same_thread": False}  # SQLite only
    )
else:
    engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

