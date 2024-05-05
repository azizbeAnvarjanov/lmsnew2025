"use client";
import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useStore from "@/app/(store)/store";

const Login = () => {
  const [email, setEmail] = useState();

  const resetPassword = useStore((state) => state.resetPassword);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Card className="mx-auto max-w-sm shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Reset passwprd</CardTitle>
          <CardDescription>
            Enter your email for reset password.
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
            <Button
              onClick={(e) => resetPassword(e, email)}
              className="w-full"
              type="submit"
            >
              Reset
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
