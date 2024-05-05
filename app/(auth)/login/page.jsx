"use client";
import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useStore from "@/app/(store)/store";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = useStore((state) => state.login);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Card className="mx-auto max-w-sm shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-sm font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
                  href="/reset"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </div>
            <Button
              onClick={(e) => login(e, email, password)}
              className="w-full"
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          Don't have an account?
          <Link
            className="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50 ml-2"
            href="/register"
          >
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;