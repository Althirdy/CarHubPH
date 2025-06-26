import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PasswordInput } from "@/components/ui/PasswordInput"
import { useAuth } from "@/contexts/AuthContext"
import { Loader2 } from "lucide-react"

export default function Login() {
    const { login, error,loading } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login({ email, password })
    }



    return <>
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <Card className="w-full max-w-sm p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
                {error && <div className="text-red-500 bg-red-500/10 p-2 text-md rounded-md text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        className="h-11 text-lg px-4 py-2"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                    <PasswordInput
                        className="h-11 text-lg px-4 py-2"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" className="w-full" disabled={loading}>{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Login"}</Button>
                </form>
            </Card>
        </div>
    </>

}

