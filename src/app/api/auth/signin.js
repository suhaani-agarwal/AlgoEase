// pages/auth/signin.js
"use client"
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";




const SignInPage = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    
    const res = await signIn("credentials", {
      redirect: false,
      email : e.email,
      password: e.password,
    });
    console.log(res);

    if (res?.error) {
      setError("Invalid credentials");
      console.log(res.error)
    } else {
      router.push("/dashboard"); // Redirect on success
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
