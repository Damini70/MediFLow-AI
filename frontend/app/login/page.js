"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async () => {
    
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold">Login</h1>
        <input className="w-full p-2 mt-4 border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full p-2 mt-4 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="px-4 py-2 mt-4 text-white bg-blue-500" onClick={handleLogin}>Sign In</button>
      </div>
    </main>
  );
}
