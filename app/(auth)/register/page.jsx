"use client";
import React, { useEffect, useState } from "react";
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
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/(firebase)/config";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import useStore from "@/app/(store)/store";

const Register = () => {
  const navigate = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();


  const register = useStore((state) => state.register);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Card className="mx-auto max-w-sm shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create accaunt</CardTitle>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => setPasswordConf(e.target.value)}
                value={passwordConf}
              />
            </div>
            <Button onClick={(e) => register(e, email, password, passwordConf)} className="w-full" type="submit">
              Create accaunt
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          Don't have an account?
          <Link
            className="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50 ml-2"
            href="/login"
          >
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
