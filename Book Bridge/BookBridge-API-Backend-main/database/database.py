from datetime import datetime
import os
from sqlalchemy import DateTime, Float, create_engine, Column, Integer, String, select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine


# ENV variables
from dotenv import load_dotenv
load_dotenv()

#DATABASE_URL = "mysql+mysqlconnector://root:""@localhost:3306/books"
#DATABASE_URL="mysql://root:@localhost/books"
DATABASE_URL = "postgresql://postgres:Kich.42@localhost:5432/Books"



engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# User table

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    name = Column(String(100), index=True)
    email = Column(String(100), unique=True, index=True)
    password = Column(String(100))
    
    
class UserDashBoard(Base):
    __tablename__ = "dashboard"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    email = Column(String(100), index=True)
    book = Column(String(100), index=True)
    author = Column(String(100), index=True)
    country = Column(String(100), index=True)
    state = Column(String(100), index=True)
    tags = Column(String(100), index=True)
    description = Column(String(100), index=True)
    path = Column(String(100), index=True)
    
    
class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    sender_email = Column(String(100), index=True)
    receiver_email = Column(String(100), index=True)
    message = Column(String(1000))
    timestamp = Column(DateTime, default=datetime.utcnow)
    
    
Base.metadata.create_all(bind=engine)