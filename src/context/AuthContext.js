import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Firebase Auth Listener
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Check domain restriction
                if (currentUser.email && currentUser.email.toLowerCase().endsWith('@kongu.edu')) {
                    setUser(currentUser);
                } else {
                    // Invalid domain - force logout
                    signOut(auth);
                    setUser(null);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (user.email && user.email.toLowerCase().endsWith('@kongu.edu')) {
                return { success: true };
            } else {
                // Invalid domain
                await signOut(auth);
                return { success: false, error: 'Access provided for @kongu.edu users only.' };
            }
        } catch (error) {
            console.error("Login Error", error);
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, logout, isAuthenticated: !!user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
