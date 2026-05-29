"use client";
import { useContext } from "react";
import { authContext } from "@/context/auth.context";
import {login , register , logout} from "@/services/auth.api.js"


export const useAuth = () => {
    const context = useContext(authContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const {user , setUser , loading , setLoading} = context;

    const handleLogin = async({identifier , password}) => { 
        try {
        setLoading(true)
        const data = await login({identifier , password});
        setUser(data.user);
        return data.user;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const handleRegister = async({username, email, password}) => {

        try {
            setLoading(true);
            const data = await register({username, email, password});
            setUser(data.user);
            return data.user;
        } catch (error) {
            console.log("Registration error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = async() => {
        try {
            setLoading(true);
            await logout();
            setUser(null);
        } catch (error) {
            console.log("Logout error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }
    return { user, setUser, loading, setLoading, handleLogin, handleRegister, handleLogout };
}
