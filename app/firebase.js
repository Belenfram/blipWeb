import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configura tu aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAh6IYbTbRwvXRD9OAua-6qoULO-_qJkMo",
  authDomain: "camarita-37f1a-default-rtdb.firebaseapp.com",
  databaseURL: "https://camarita-37f1a-default-rtdb.firebaseio.com",
  projectId: "camarita-37f1a",
  storageBucket: "camarita-37f1a.appspot.com",
  messagingSenderId: "577482221736	",
  appId: "1:577482221736:android:799300d0fa705cdf98fa9d",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; // Exporta el objeto de la base de datos para que pueda ser importado en otros archivos