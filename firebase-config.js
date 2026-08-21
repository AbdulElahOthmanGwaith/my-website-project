// استبدل القيم التالية بإعدادات مشروعك من Firebase Console عند تفعيل الخدمات السحابية.
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// استيراد مكتبات Firebase عبر CDN (مناسب للمشاريع الـ Static)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const requiredConfigKeys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const firebaseReady = requiredConfigKeys.every((key) => {
    const value = firebaseConfig[key];
    return typeof value === 'string' && value.length > 0 && !value.includes('YOUR_');
});

let db = null;
let auth = null;

if (firebaseReady) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
} else {
    // يعمل ConnectHub في الوضع المحلي عندما لا تكون إعدادات Firebase حقيقية بعد.
    console.info('Firebase غير مهيأ: سيتم استخدام ميزات ConnectHub المحلية فقط.');
}

export {
    db,
    auth,
    firebaseReady,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    RecaptchaVerifier,
    signInWithPhoneNumber
};
