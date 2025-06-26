import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router-dom";



export default function GuestRoute({ children }: { children: React.ReactNode }) {
    const { currentUser, loading, token } = useAuth();

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-sm">Loading...</span>
            </div>
        );
    }
    if (currentUser && token) {
        return <Navigate to="/dashboard"  replace/>;
    }

    return children;
}
