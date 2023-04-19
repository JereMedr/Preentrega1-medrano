import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
//context
import { useContext } from "react";
import cartContext from "../../context/cartContext";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//config firebase--------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "jeremias-consecionario-ch.firebaseapp.com",
    projectId: "jeremias-consecionario-ch",
    storageBucket: "jeremias-consecionario-ch.appspot.com",
    messagingSenderId: "511040968402",
    appId: "1:511040968402:web:6e02a60ea8537987f57f0b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//-------------

async function getSingleAutoFromDB(idAuto) {
    const autosCollectionRef = collection(db, "autos");
    const autoDocRef = doc(autosCollectionRef, idAuto);

    const docSnapShot = await getDoc(autoDocRef);
    if (docSnapShot.exists()) {
        return { ...docSnapShot.data(), id: docSnapShot.id }
    } else {
        // doc.data() will be undefined in this case
    }


}


function ItemDetailContainer() {
    const [auto, setAuto] = useState([]);
    const params = useParams();
    const idAuto = params.id;


    const {addItem } = useContext(cartContext);

    useEffect(() => {
        getSingleAutoFromDB(idAuto).then((auto) => {
            setAuto(auto);
        });
    }, [])



    return (
        <div className="center-item" >
            <div>
            <ItemDetail auto={auto} />
            </div>
        </div>
    );
}


export default ItemDetailContainer;