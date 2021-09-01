# Example How to Use PayPal Checkout API SDK for NodeJS V1 and V2

## V1 paypal-rest-sdk:
VIdeo Demo: 
<a href="https://www.youtube.com/watch?v=OUVNo1F6vRc">
    <p align="center">
      <img width="246" height="150" src="https://i.ytimg.com/vi/OUVNo1F6vRc/hqdefault.jpg?s%E2%80%A6AFwAcABBg==&rs=AOn4CLAmWp5qZiO_1QQASrup0SSa3OxaKg">
    </p>
</a>

Example of use paypal-rest-sdk with server side in nodejs and client side in react , this project use Sandbox paypal and build an invoice after payment

In this project we will find all process for build an account paypal use Client and Secret ID in the APP
this an example how to use Paypal API in Server side with the library paypal-rest-sdk

I use also @react-pdf/renderer for generate an Invoice with the JSON that paypal give me after the payment

## Install all Environment:

1. open an paypal Account : https://www.paypal.com/signin
2. Go to My Account or use : https://developer.paypal.com/developer/accountStatus/
3. Create Sandbox Account : sandbox -> account -> create account -> business account
4. Create app : My apps & credentials -> create app --> name + merchant (email of buisness acccount ) --> create app
5. Get client and secret ID of the App : My apps & credentials --> name of your app --> copy client ID and secret ID
6. Create .env and add client ID and Secret ID in server/.env:

```
PORT=4000
HOST=http://localhost:3000
CLIENT_ID=XXXXXXXXXXXXX
CLIENT_SECRET=XXXXXXXXXXXXX
```

7. Create .env in client :

```
REACT_APP_URL1='http://127.0.0.1:4000'
```

8. Terminal at the root :

```
# first install all files
yarn
# that will launch all install in server and client
yarn install:dev
```

9. Start the project :

```
yarn start:dev
```

## V2 @paypal/checkout-server-sdk:

Example available here :
https://github.com/YonathanGuez/nodejs-react-paypal-sdk-invoice/tree/V2-paypal/checkout-server-sdk


