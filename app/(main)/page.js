"use client";
import React, { useEffect } from "react";
import Dashboard from "./(components)/Dashboard";
import { toast } from "react-hot-toast";
import useStore from "../(store)/store";
import { auth, db } from "../(firebase)/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";

const HomePage = () => {
  const getUser = useStore((state) => state.getUser);
  const user = JSON.parse(localStorage.getItem("user"));
  const userUID = user?.uid;
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default HomePage;
