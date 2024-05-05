"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import useStore from "@/app/(store)/store";

const EditUserDialog = ({ userEmail, userFullName, userRole, userUid }) => {
  const updateUser = useStore((state) => state.updateUser);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(userEmail);
  const [role, setRole] = useState(userRole);
  const [fullName, setFullName] = useState(userFullName);

  return (
    <div>
      <Dialog open={isOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
            edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Fill out the form below to create a new user account.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label className="text-left" htmlFor="name">
                Name
              </Label>
              <Input
                className="col-span-3"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label className="text-left" htmlFor="email">
                Email
              </Label>
              <Input
                className="col-span-3"
                id="email"
                placeholder="john@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid items-center gap-4">
              <Label className="text-left" htmlFor="role">
                Role
              </Label>
              <Select
                className="w-full"
                id="role"
                defaultValue={userRole}
                onValueChange={(e) => setRole(e)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
          <DialogFooter>
            <Button
              onClick={() =>
                updateUser(email, fullName, role, userUid, setIsOpen)
              }
              type="submit"
            >
              Update User
            </Button>
            <div>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditUserDialog;
