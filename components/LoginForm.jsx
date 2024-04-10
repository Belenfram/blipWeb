'use client';

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials",{
                email, 
                password, 
                redirect: false,
            });

            if (res.error) {
                setError("Credenciales Inválidas");
                return;
            }

            router.replace("dashboard");

        } catch (error) {
            console.log("Error al iniciar sesión: ", error);
        }
    };

    return (
        <div className="grid place-items-center bg-gray-700 h-screen">
        <div className="shadow-lg p-5 rounded-md border-t-8 bg-slate-100 border-teal-600">
            <h1 className="text-pretty font-extrabold my-3 text-center">INICIAR SESIÓN</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={e => setEmail(e.target.value)} 
                type="text" 
                placeholder="Email"/>
                <input onChange={e => setPassword(e.target.value)} 
                type="password" 
                placeholder="Contraseña"/>
                <button className="bg-teal-600 font-semibold text-white cursor-pointer px-6 py-2">
                    Acceder
                </button>

                {error && (
                    <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                    </div>
                )}

                <Link className="text-sm mt-3 text-center" href={'/register'}>
                    ¿No tienes una cuenta?
                    <br></br> 
                    <span className="underline"> Crear cuenta</span>
                </Link>
            </form>
        </div>
    </div>
    );

}