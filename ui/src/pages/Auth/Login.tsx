import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PasswordInput } from "@/components/ui/PasswordInput"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !password) {
            setError("Email and password are required.")
            return
        }
        setError("")
        // Handle login logic here
        alert("Logged in!")
    }



    return <>
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <Card className="w-full max-w-sm p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
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
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <Button type="submit" className="w-full">Login</Button>
                </form>
            </Card>
        </div>
    </>

}

