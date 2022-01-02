// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const Initialization = () => {
    initializeApp(firebaseConfig);
}
export default Initialization;

//const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Initialization);