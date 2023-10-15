import secrets
from PIL import Image
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy import and_, distinct, or_
from datetime import datetime

from database.database import SessionLocal

# Models.py
from models.models import RegisterUser, LoginUser, ChatMsg

# Database.py
from database.database import User, UserDashBoard, ChatMessage

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Static file setup
app.mount('/static/', StaticFiles(directory="static"), name="static")



@app.get('/')
async def root():
    return {'message': 'Hello World'}



@app.post("/register/")
async def create_user(user: RegisterUser):
    db = SessionLocal()
    
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user = User(name=user.name, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()
    return db_user



@app.post("/login")
def login(login: LoginUser):
    db = SessionLocal()
    user = db.query(User).filter(User.email == login.email).first()
    db.close()

    if user and user.password == login.password:
        return {
            "message": "Login successful",
            "email" : user.email,
            "name" : user.name
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    
    
@app.post('/addbooks')
async def add_books(
        file_upload: UploadFile = File(...), 
        email: str = Form(...), 
        book: str = Form(...), 
        author: str = Form(...),
        country: str = Form(...), 
        state: str = Form(...), 
        tags: str = Form(...),
        description: str = Form(...)
    ):
    db = SessionLocal()
    
    FILE_PATH = "./static/images"
    filename = file_upload.filename
    extension = filename.split(".")[1]
    
    if extension not in ['jpg', 'jpeg', 'png']:
        return {'error': 'Invalid extension'}
    
    token_name = secrets.token_hex(10) + "." + extension
    generated_name = FILE_PATH + token_name
    
    file_content = await file_upload.read()
    
    with open(generated_name, "wb") as f:
        f.write(file_content)
        
    # PIL book image resize
    img = Image.open(generated_name)
    img = img.resize(size = (200, 200))
    img.save(generated_name)
    
    file_url = "127.0.0.1:8000" + generated_name[1:]
    print(generated_name)
        
    db_user = UserDashBoard(email=email, 
                            book=book, 
                            author=author, 
                            country=country, 
                            state=state, 
                            tags=tags, 
                            description=description,
                            path=file_url
                            )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()
    
    return db_user


@app.get('/userbooks/{email}')
async def get_books_by_email(email: str):
    db = SessionLocal()
    books = db.query(UserDashBoard).filter(UserDashBoard.email == email).all()
    db.close()

    return [
        {
            "id": book.id,
            "book": book.book,
            "author": book.author,
            "path": book.path,
            "description": book.description,
            "tags": book.tags         
        }
        for book in books
    ]
    
    
@app.get('/allbooks')
async def get_all_books():
    db = SessionLocal()
    details = db.query(UserDashBoard).all()
    db.close()

    return [
        {
            "author": book.author,
            "id": book.id,
            "state": book.state,
            "description": book.description,
            "book": book.book,
            "country": book.country,
            "tags": book.tags,
            "path": book.path        
        }
        for book in details
    ]
    
    
@app.get('/allbooks/{id}')
async def get_book_by_id(id: int):
    db = SessionLocal()
    book = db.query(UserDashBoard).filter(UserDashBoard.id == id).first()
    db.close()

    if book:
        return {
            "author": book.author,
            "email": book.email,
            "id": book.id,
            "state": book.state,
            "description": book.description,
            "book": book.book,
            "country": book.country,
            "tags": book.tags,
            "path": book.path   
        }
    else:
        return {"message": "Image not found."}




@app.post("/send_message")
def send_message(message: ChatMsg):
    db = SessionLocal()

    db_message = ChatMessage(
        sender_email=message.sender_email,
        receiver_email=message.receiver_email,
        message=message.message,
        timestamp = datetime.utcnow()
    )

    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    db.close()

    return {"status": "Message sent successfully"}


@app.get('/chat_history/{sender_email}/{receiver_email}')
def get_chat_history(sender_email: str, receiver_email: str):
    db = SessionLocal()

    chat_history = db.query(ChatMessage).filter(
        or_(
            and_(ChatMessage.sender_email == sender_email, ChatMessage.receiver_email == receiver_email),
            and_(ChatMessage.sender_email == receiver_email, ChatMessage.receiver_email == sender_email)
        )
    ).all()

    db.close()

    return chat_history



@app.get('/chat_emails/{email}')
def get_chat_emails(email: str):
    db = SessionLocal()

    chat_emails = (
        db.query(distinct(ChatMessage.receiver_email))
        .filter(ChatMessage.sender_email == email)
        .all()
    )

    db.close()

    return {"chat_emails": [email[0] for email in chat_emails]}