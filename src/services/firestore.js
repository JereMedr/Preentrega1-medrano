import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSingleAutoFromDB(idAuto) {
    const autosCollectionRef = collection(db, "autos");
    const autoDocRef = doc(autosCollectionRef, idAuto);

    const docSnapShot = await getDoc(autoDocRef);
    if (docSnapShot.exists()) {
        return { ...docSnapShot.data(), id: docSnapShot.id }
    } else {
        return null;
        // doc.data() will be undefined in this case
    }
}

export async function getDataFromDB() {
    const autosCollectionRef = collection(db, "autos");
    let snapshotAutos = await getDocs(autosCollectionRef);
    const documents = snapshotAutos.docs;
    const dataAutos = documents.map(doc => ({id:doc.id, ...doc.data()}));
    return dataAutos;
}

export async function getDataByMarca(marca) {
    const autosCollectionRef = collection(db, "autos");
    let snapshotAutos = await getDocs(autosCollectionRef);
    const documents = snapshotAutos.docs;
    const dataAutos = documents.map(doc => ({id:doc.id, ...doc.data()}));
    const dataAutosByMarca = dataAutos.filter(auto => auto.marca === marca);
    return dataAutosByMarca;
}