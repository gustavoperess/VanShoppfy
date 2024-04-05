<h1 align="center">
  VanShoppfy
</h1>




Check the deployed version: 
  [VanShoppfy](https://vanshoppfy.onrender.com/).

## Features

- **Browse and Search**: Navigate through different categories including hats/watches/mens/womens. .
- **Shop without logging in**: Shop on our website without the need of logging in; your purchases are tracked through browser cookies.
- **Manage your purchase**: Update, add, or delete the items inside the shopping cart.
- **User Profiles**: Manage your profile, view your order history, and edit your details.
- **Shopping Cart**: Add books to your cart, adjust quantities, or remove items as needed before checkout.
- **Side bar shopping**: See in real-time what has been added to your cart.
- **Procced to checkout**: Buy unlimited clothes with the given credit card, offer only today 🤓.



Check the deployed version: 
  [VanShoppfy](https://vanshoppfy.onrender.com/).


##  Set up your project  

1. Install Node Version Manager (NVM)
```
   brew install nvm
```
2. Install the latest version of [Node.js](https://nodejs.org/en/)

3. Clone this repository: 
 ```
    git clone https://github.com/gustavoperess/eStore.git
```

4. Install dependencies for both the `frontend` and `api` applications:
```
   cd frontend
   npm install
   cd ../api
   npm install
```

6. Install MongoDB
```
   brew tap mongodb/brew
   brew install mongodb-community@6.0
```
 
7. Start MongoDB
```
   brew services start mongodb-community@6.0
```

##  Setting up environment variables.  

#### Frontend

Create a file `frontend/.env` with the following contents:

```
    VITE_BACKEND_URL="http://localhost:3000"
```

#### Backend

Create a file `api/.env` with the following contents:

```
    MONGODB_URL="mongodb://0.0.0.0/vanShoppfy"
    NODE_ENV="development"
    JWT_SECRET="secret"
```

##  How to run the server and use the app 

1. Start the server application (in the `api` directory) in dev mode:

```
     cd api
     npm run dev
```

2. Start the front end application (in the `frontend` directory)

In a new terminal session...

```
     cd frontend
     npm run dev
```







