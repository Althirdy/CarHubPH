import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/app-layout'
import NotMatch from './pages/NotMatch'
import Dashboard from './pages/Dashboard'
import Login from './pages/Auth/Login'
import ProtectedRoute from './components/routes/ProtectedRoute'

export default function Router() {
    return (
        <Routes>


            <Route element={<AppLayout />}>

                <Route path="/dashboard" element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Dashboard />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="*" element={<NotMatch />} />
            <Route path="/AdminAuth" element={<Login />} />

        </Routes>
    )
}
