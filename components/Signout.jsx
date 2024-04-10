/*import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const {data:session} = useSession();

    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
            <div>
                Nombre: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
                Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
            <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
                Salir
            </button>
        </div>
    </div>;
}*/

// LogoutButton.jsx
'use client';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOut();
      console.log('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 border-2 border-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Salir
    </button>
  );
};

export default LogoutButton;









