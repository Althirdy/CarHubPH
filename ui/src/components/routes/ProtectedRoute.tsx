import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { currentUser, loading } = useAuth();
    // Global loading screen
    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
                <span className="ml-2 text-sm">Loading...</span>
            </div>
        );
    }

    if (!currentUser) return <Navigate to="/AdminAuth" />;
    if (allowedRoles && !allowedRoles.includes(currentUser.role)) return <Navigate to="/unauthorized" />;

    return children;
}
