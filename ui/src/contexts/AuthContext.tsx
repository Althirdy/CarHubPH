import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthService } from "@/hooks/useAuthService";

export type User_T = {
    id: number;
    name: string;
    email: string;
    role: string;
}

type AuthContext_T = {
    token: string;
    loading: boolean;
    login: ({ email, password }: { email: string, password: string }) => void;
    signOut: () => void;
    currentUser: User_T | null;
    error: string;
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
    error: "",
})




export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User_T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [token, setToken] = useState<string>(() => localStorage.getItem("token") || "");
    const [error, setError] = useState<string>("");
    const { getCurrentUser: getCurrentUserQuery, loginMutation, signOutMutation } = useAuthService();
    const navigate = useNavigate();

    async function getCurrentUser() {
        try {
            setLoading(true);
            const response = await getCurrentUserQuery.refetch();
            setCurrentUser(response.data?.data);
        } catch (error: any) {
            localStorage.removeItem("token");
            setError(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            getCurrentUser();
        }
    }, [token]);

    const signOut = async () => {
        try{
            await signOutMutation.mutateAsync();
            localStorage.removeItem("token");
            setToken("");
            setCurrentUser(null);
            navigate("/AdminAuth", { replace: true });
        }catch(error:any){
            setError(error?.response?.data?.message);
        }
    }

    const login = async ({ email, password }: { email: string, password: string }) => {
        try {
            setError("");
            setLoading(true);
            const response = await loginMutation.mutateAsync({ email, password });
            setToken(response.data.token);
            setCurrentUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error: any) {
            setError(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <AuthContext.Provider value={{ loading, token, signOut, login, currentUser, error }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = (): AuthContext_T => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}