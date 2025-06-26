import { BrowserRouter, HashRouter } from 'react-router'
import { ThemeProvider } from './contexts/ThemeContext'
import Router from './Router'
import { AuthProvider } from './contexts/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppRouter = import.meta.env.VITE_USE_HASH_ROUTE === 'true' ? HashRouter : BrowserRouter

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <AppRouter>
                    <AuthProvider>
                        <Router />
                    </AuthProvider>
                </AppRouter>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
