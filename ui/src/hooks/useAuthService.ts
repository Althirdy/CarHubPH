import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthApi } from "../api/Auth.api";

export function useAuthService() {

    
    const getCurrentUser = useQuery({
        queryKey: ["currentUser"],
        queryFn: () => AuthApi.getUser(),
        retry: false,
        enabled: !!localStorage.getItem("token"),
    })


    const loginMutation = useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => AuthApi.login(email, password),
    })

    const signOutMutation = useMutation({
        mutationFn: () => AuthApi.logout(),
    })

    return {
        loginMutation,
        getCurrentUser,
        signOutMutation
    }
}
