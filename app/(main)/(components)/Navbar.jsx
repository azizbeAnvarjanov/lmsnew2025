"use client";
import { Button } from "@/components/ui/button";
import { LogIn} from "lucide-react";
import Image from "next/image";
import React from "react";
import SheetModal from "./SheetModal";
import { useRouter } from "next/navigation";
import {  db } from "@/app/(firebase)/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useStore from "@/app/(store)/store";
import UserSkeleton from "./UserSkeleton";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

const Navbar = () => {
  const navigate = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));
  const userUID = user?.uid;
  if (!user) {
    return (
      <div className="w-full border-b-[1px] border-[--border] bg-white flex items-center justify-end p-4 gap-3">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
    );
  }
  const query = doc(db, "users", userUID);
  const [userDetails, loading, error] = useDocumentData(query);

  const role = userDetails?.role;
  const avatarImg = userDetails?.photoUrl;

  const logOut = useStore((state) => state.logOut);

  return (
    <div className="h-[10vh] w-full navbar flex items-center justify-end py-2 px-4 lg:px-10 border-b-[1px] border-[--border] bg-white lg:pl-[19%]">
      <div className="sm:hidden">
        <SheetModal />
      </div>
      {loading ? (
        <>
          <UserSkeleton />
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Button onClick={logOut} variant="outline">
                  {" "}
                  <LogIn size={14} className="mr-1" /> logout
                </Button>
                {role === "teacher" && (
                  <Button
                    onClick={() => navigate.push("/teacher")}
                    variant="outline"
                  >
                    {" "}
                    Teacher mode
                  </Button>
                )}
                {role === "admin" && (
                  <Button
                    onClick={() => navigate.push("/admin")}
                    variant="outline"
                  >
                    {" "}
                    Admin
                  </Button>
                )}
                <DropdownMenu className="z-50 drop">
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="overflow-hidden rounded-full relative"
                    >
                      <Image
                        src={
                          avatarImg === "" || undefined
                            ? "/placeholder-user.webp"
                            : avatarImg
                        }
                        fill
                        alt="Avatar"
                        className="overflow-hidden rounded-full object-cover"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => navigate.push("/profile")}
                      className="cursor-pointer"
                    >
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate.push("/login")}
                  variant="outline"
                >
                  Login
                </Button>
                <Button onClick={() => navigate.push("/register")}>
                  {" "}
                  Register
                </Button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
