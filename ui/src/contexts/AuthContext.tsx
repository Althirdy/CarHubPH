import { createContext, useContext, useState } from "react";

export type User_T = {
    id: number;
    name: string;
    email: string;
    role: string;
}

type AuthContext_T = {
    token: string;
    loading: boolean;
    login: () => void;
    signOut: () => void;
    currentUser: User_T | null;
}

type AuthProviderProps = {
    children: React.ReactNode;
}


const AuthContext = createContext<AuthContext_T>({
    token: "",
    login: () => { },
    signOut: () => { },
    loading: false,
    currentUser: null,
})




export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User_T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");

    const signOut = () => {
    }

    const login = () => {

    }


    return (
        <AuthContext.Provider value={{ loading, token, signOut, login, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = (): AuthContext_T => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}