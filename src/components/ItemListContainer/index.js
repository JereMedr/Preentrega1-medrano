import { useState, useEffect } from "react";
import ItemList from "../ItemList";
//config firebase--------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
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
//-----------------------------------------------------------------------------------------



function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    
    async function getDataFromDB() {
        console.log("estoy en getDataFromDB");
        const autosCollectionRef = collection(db, "autos");
        let snapshotAutos = await getDocs(autosCollectionRef);
        const documents = snapshotAutos.docs;
        const dataAutos = documents.map(doc => ({id:doc.id, ...doc.data()}));
        setData(dataAutos);
    }

    // function getDataFromDB() {
    //     console.log("estoy en getDataFromDB");
    //     const querySnapshot = getDocs(collection(db, "autos"));
    //     querySnapshot.then((querySnapshot) => {
    //         const docs = querySnapshot.docs.map(doc => doc.data());
    //         setData(docs);
    //     });
    // }

    useEffect(() => {
        getDataFromDB()
    }, [])

    return (
        <>
            <h2>{greeting}</h2>
            {console.log("estoy en return")}
            {/* {data.map((item) => (console.log("data item:"+item.modelo)))} */}
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
