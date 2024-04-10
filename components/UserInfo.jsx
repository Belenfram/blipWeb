'use client'
import React, { useEffect, useState } from 'react';
import { database } from '../app/firebase';
import { ref, onValue, off } from 'firebase/database';
import { useSession } from 'next-auth/react';

const Paquetes = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database, 'historial');
        onValue(dbRef, (snapshot) => {
          const firebaseData = snapshot.val();
          if (firebaseData) {
            const dataArray = Object.values(firebaseData);
            setData(dataArray);
          }
        });
        
        // Detener la escucha de cambios cuando el componente se desmonte
        return () => off(dbRef);
      } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
      }
    };

    fetchData();

  }, []);

  const {data:session} = useSession();

  return (
    <div className="min-h-screen bg-gray-700 text-white p-8 mt-16 pb-16">
      <div className="text-2xl font-semibold mb-4">
        Bienvenido <span className="font-bold">{session?.user?.name}</span>
      </div>
      <h1 className='text-center font-bold mb-4 text-2xl'>Monitoreo de Paquetes:</h1>
      <br></br>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-4 p-4 border border-black rounded-md bg-slate-500">
            <p>Clasificación: {item.clasificacion}</p>
            <p>Fecha: {item.fecha}</p>
            <p>Id: {item.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paquetes;