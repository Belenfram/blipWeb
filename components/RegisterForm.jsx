"use client";

import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email || !password) {
            setError("Es necesario llenar todos los campos");
            return;
        }

        try {

            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });

            const {user} = await resUserExists.json();

            if (user) {
                setError("Usuario ya existente");
                return;
            }

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify({
                    name, email, password
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            }else{
                console.log("registro de usuario fallido");
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    console.log("Name: ", name);

    return (
        <div className="grid place-items-center bg-gray-700 h-screen">
        <div className="shadow-lg p-5 rounded-md border-t-8 bg-slate-100 border-teal-600">
            <h1 className="text-pretty font-extrabold my-3 text-center">NUEVA CUENTA</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre"/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña"/>
                <button className="bg-teal-600 font-semibold text-white cursor-pointer px-6 py-2">
                    Registrarse
                </button>

                { error && (
                    <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                    </div>
                )}

                <Link className="text-sm mt-3 text-center" href={'/'}>
                    ¿Ya tienes una cuenta?
                    <br></br>  
                    <span className="underline">Inicia sesión</span>
                </Link>
            </form>
        </div>
    </div>
    )
}

