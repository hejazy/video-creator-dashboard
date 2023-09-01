import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { v4 as uuid } from 'uuid';
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
  
const firebaseConfig = {
    apiKey: "AIzaSyDJpLxGaj0IjXtgn3lxkDfZVJUM-9n5m08",
    authDomain: "test-84859.firebaseapp.com",
    projectId: "test-84859",
    storageBucket: "test-84859.appspot.com",
    messagingSenderId: "588034043747",
    appId: "1:588034043747:web:02e562d58e3d048781ad56"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadImage = async (image) => {
    const imageRef = storageRef(storage, `images/${uuid()}`);
    const snapshot = await uploadBytes(imageRef, image);
    return await getDownloadURL(snapshot.ref);

}