"use client";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { auth, db, storage } from "../../(firebase)/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-hot-toast";
import useStore from "../../(store)/store";
import Link from "next/link";

const page = () => {
  const navigate = useRouter();

  

  const user = JSON.parse(localStorage.getItem("user"));
  const userDetails = useStore((state) => state.userDetailsInfo);
  const userLoading = useStore((state) => state.userLoading);
  const getUser = useStore((state) => state.getUser);
  const uid = user?.uid;

  useEffect(() => {
    getUser(uid);
  }, []);

  const userFullName = userDetails?.fullName;
  const email = userDetails?.email;
  const role = userDetails?.role;
  const token = userDetails?.token;
  const emailVerified = user?.emailVerified;

  const [bio, setBio] = useState(userDetails?.bio);
  const [fullName, setFullName] = useState(userFullName);
  const [phoneNumber, setPhoneNumber] = useState(userDetails?.phoneNumber);
  const [photoUrl, setPhotoUrl] = useState(userDetails?.photoUrl);
  console.log(fullName);

  const [imageLoading, setimageLoading] = useState(false);

  const changeImg = async (file) => {
    try {
      const storageRef = ref(storage, "avatarImg/" + file.name);
      await uploadBytes(storageRef, file).then(() => {
        toast.success(
          "Rasm o'zgartildi o'zgartirish saqlab qolish uchun iltimos saqlash knopkasini bosin aks holda o'zgartirganingiz saqlanib qolinmaydi !"
        );
      });
      await getDownloadURL(storageRef).then((url) => setPhotoUrl(url));
      await updateDoc(doc(db, "users", uid), {
        photoUrl,
      }).then(() => {
        getUser(uid);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const upDateUserDetails = async () => {
    toast.loading("saving...");

    await updateDoc(doc(db, "users", uid), {
      fullName,
      bio,
      phoneNumber,
      photoUrl,
    }).then(() => {
      getUser(uid);
      toast.success("Profile success updated !");
    });
  };

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-4 md:py-10">
          <div className="mx-auto grid w-full max-w-[50%] gap-2">
            <h1 className="text-3xl font-semibold flex items-center">
              {" "}
              <Link href="/" className="bg-white p-2 mr-2 rounded-md border-[1px] border-[--border] ">
                <ChevronLeft />
              </Link>
              Settings
            </h1>
          </div>
          <div className="mx-auto grid w-full max-w-[50%] items-start gap-6 ">
            <div className="grid gap-6">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>User full name</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <div className="w-[50%] h-[100px] flex items-center gap-5">
                        <div className="w-[80px] h-[80px] relative">
                          <Image
                            alt="Course image"
                            className="w-full rounded-full object-cover"
                            src={
                              photoUrl !== "" ? photoUrl : "/placeholder.svg"
                            }
                            fill
                          />
                        </div>
                        <div className="grid items-center gap-4">
                          <div className="group relative flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-6 py-2 text-center transition-colors hover:border-gray-400 dark:border-gray-600 dark:bg-gray-950">
                            <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                              choose img
                            </div>
                            <Input
                              onChange={(e) => changeImg(e.target.files[0])}
                              className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                              id="file-upload"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                      <Label>Full Name</Label>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Biography</Label>
                      <Textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={email} readOnly type="email" />
                    </div>
                    <div>
                      <Label>Phone Number</Label>
                      <Input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Role</Label>
                      <Input value={role} readOnly type="text" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" value={false} />
                      <Label htmlFor="airplane-mode">Email verified</Label>
                    </div>
                    <div>
                      <Label htmlFor="airplane-mode">User UID</Label>
                      <div className="flex space-x-2">
                        <Input readOnly value={uid} />
                        <Button variant="secondary" className="shrink-0">
                          Copy UID
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="airplane-mode">User token</Label>
                      <div className="flex space-x-2">
                        <Input readOnly value={token} />
                        <Button variant="secondary" className="shrink-0">
                          Copy token
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className=" px-6">
                  <Button onClick={upDateUserDetails}>Save</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div>Change Password</div>
                  <div>
                    For your security, please do not share your password with
                    others.
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
