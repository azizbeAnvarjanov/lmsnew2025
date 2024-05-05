"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import AddUserDialog from "../../(components)/AddUserDialog";
import { collection } from "firebase/firestore";
import { db } from "@/app/(firebase)/config";
import EditUserDialog from "../../(components)/EditUserDialog";
import DeleteUserDialog from "../../(components)/DeleteUserDialog";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Allusers = () => {
  const query = collection(db, "users");
  const [docs, loadin, error] = useCollectionData(query);

  if (loadin) {
    return <>loading....</>;
  }

  if (error) {
    return <>Error server </>;
  }

  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
          <AddUserDialog />
        </div>
        <div className="shadow-sm rounded-lg bg-white p-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docs.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <EditUserDialog
                        userEmail={user.email}
                        userFullName={user.fullName}
                        userRole={user.role}
                        userUid={user.id}
                      />
                      <DeleteUserDialog user={user} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Allusers;
