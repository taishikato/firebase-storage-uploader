# @taishikato/firebase-storage-uploader

A library to upload a image on Firebase Storage📸

![npm (scoped)](https://img.shields.io/npm/v/@taishikato/firebase-storage-uploader)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@taishikato/firebase-storage-uploader?label=minified%20size)

## Install
With npm
```shell
$ npm i @taishikato/firebase-storage-uploader
```
With yarn
```shell
$ yarn add @taishikato/firebase-storage-uploader
```

## Usage

```javascript
// CommonJS
const uploadImage = require('@taishikato/firebase-storage-uploader').default;
// ES6
import uploadImage from '@taishikato/firebase-storage-uploader';

import firebase from 'firebase/app'
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: <apiKey>,
    authDomain: <authDomain>,
    databaseURL: <databaseURL>
    projectId: <projectId>
    storageBucket: <storageBucket>
    messagingSenderId: <messagingSenderId>
    appId: <appId>
    measurementId: <measurementId>
  })
}

const imageUrl = 'data:image/jpeg;base64,/9j/4gIcSUNDX1BST0ZJTEUA…'

uploadImage('users/John.png', imageUrl, firebase).then(result => {
  console.log(result) // You can access to your image file via this URL of firebase storage
})
```
