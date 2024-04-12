/*import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials;
                
                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};*/

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
              
                try {
                  await connectMongoDB();
                  const user = await User.findOne({ email });
              
                  if (!user) {
                    return { error: "Usuario no encontrado" }; // Error de usuario no encontrado
                  }
              
                  const passwordsMatch = await bcrypt.compare(password, user.password);
              
                  if (!passwordsMatch) {
                    return { error: "Contraseña incorrecta" }; // Error de contraseña incorrecta
                  }
              
                  return user;
                } catch (error) {
                  console.error("Error al autorizar usuario:", error);
                  return { error: "Ocurrió un error durante la autenticación" }; // Error genérico para problemas inesperados
                }
              },

            /*async authorize(credentials){
                const {email, password} = credentials;
                
                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },*/
        }),
    ],
    session: {
        strategy: "jwt",
    },
    //secret: "proyectoBlipcito2000",
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
