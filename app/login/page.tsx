"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/elements/input/Input";
import Button from "../components/elements/button/Button";
import { validateForm } from "../../utils/validators";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [variant, setVariant] = useState("login");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(username, password);
    if (errors.username || errors.password) {
      setUsernameError(errors.username);
      setPasswordError(errors.password);
      return;
    }
    setUsernameError("");
    setPasswordError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/user");
    } else {
      setError(data.message);
    }
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/pexels-stywo-1261728.jpg')] bg-no-repeat bg-fixed bg-cover flex items-center justify-center py-[2cm]">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-gray-700 bg-opacity-90 px-14 py-14 self-center lg:w-2/5 lg:max-w-md rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === "login" ? "Sign In" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Email"
                value={email}
              />
            )}
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="Username"
              value={username}
            />
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              value={password}
            />
            {usernameError && (
              <p className="text-red-500 mt-1">{usernameError}</p>
            )}
            {passwordError && (
              <p className="text-red-500 mt-1">{passwordError}</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <Button
              type="submit"
              label={variant === "login" ? "Login" : "Sign Up"}
            />
          </form>
          <p className="text-neutral-500 mt-7">
            {variant === "login"
              ? "First time using our service?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
