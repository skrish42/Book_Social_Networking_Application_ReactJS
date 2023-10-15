from pydantic import BaseModel
from typing import List


class RegisterUser(BaseModel):
    name: str
    email: str
    password: str
    
    
class LoginUser(BaseModel):
    email: str
    password: str
    
    
class ChatMsg(BaseModel):
    sender_email: str
    receiver_email: str
    message: str
    
    

class ChatEmailsResponse(BaseModel):
    chat_emails: List[str]