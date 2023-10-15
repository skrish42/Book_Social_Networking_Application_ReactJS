# BookBridge-API-Backend

### API Endpoints:

![Screenshot (280)](https://github.com/PritamSarbajna/BookBridge-API-Backend/assets/90236635/bf03d1e9-482f-488f-9f63-df8b7a2e64fc)

## API Usage:

#### URL : /
#### Method : GET

-----------------------------------------------------------------------------------------------------

#### URL : /register/
#### Method : POST
#### Usage : To register a new user
#### Request Body:
```
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

-----------------------------------------------------------------------------------------------------

#### URL : /login
#### Method : POST
#### Usage : To sign in a existing user
#### Request Body:
```
{
  "email": "string",
  "password": "string"
}
```

-----------------------------------------------------------------------------------------------------

#### URL : /addbooks
#### Method : POST
#### Usage : To add books to the books list
#### Request Body:
```
file_upload [ string($binary) ]
email [ string ]
book [ string ]
author [ string ]
country [ string ]
state [ string ]
tags [ string ]
description [ string ]
```

-----------------------------------------------------------------------------------------------------

#### URL : /userbooks/{email}
#### Method : GET
#### Usage : To get books uploaded by a single user via their email
#### Request Body:
```
email [ string ]
```

-------------------------------------------------------------------------------------------------------

#### URL : /allbooks
#### Method : GET
#### Usage : To get all the books uploaded to the book bridge website

-----------------------------------------------------------------------------------------------------

#### URL : /allbooks/{id}
#### Method : GET
#### Usage : To get a single book info via their book id

```
id [ integer ]
```

-----------------------------------------------------------------------------------------------------

#### URL : /send_message
#### Method : POST
#### Usage : To send a message to the respective book owners
#### Request Body:
```
{
  "sender_email": "string",
  "receiver_email": "string",
  "message": "string"
}
```

-----------------------------------------------------------------------------------------------------

#### URL : /chat_history/{sender_email}/{receiver_email}
#### Method : GET
#### Usage : To get the chat history between two emails

```
sender_email [ string ]
receiver_email [ string ]
```

-----------------------------------------------------------------------------------------------------

#### URL : /chat_emails/{email}
#### Method : GET
#### Usage : To get the users a person have chatted with
```
email [ string ]
```
