import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { auth, db } from "../(firebase)/config";
import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";


const useStore = create((set, get) => ({
  allUsers: [],
  userDetailsInfo: {},
  userLoading: false,
  user: {},
  register: async (e, email, password, passwordConf) => {
    e.preventDefault();
    try {
      if (password !== passwordConf) {
        toast.error("Password birxil emas !");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        toast.success("User success created !");
      });
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          email,
          role: "student",
          fullName: "",
          phoneNumber: "",
          photoUrl: "",
          bio: "",
          token: user.accessToken,
          emailVerified: user.emailVerified,
        }).then(() => {
          localStorage.setItem("user", JSON.stringify(user));
          getDoc(doc(db, "users", String(user.uid))).then((res) => {
            // localStorage.setItem("user-details", JSON.stringify(res.data()));
            set(() => ({ user: res.data() }));
            window.location.href = "/";
          });
        });
      }
    } catch (error) {
      toast.error("Error auth user !");
      console.log("auth error", error);
    }
  },
  logOut: async () => {
    await auth.signOut().then(() => {
      localStorage.removeItem("user");
      window.location.reload();
      toast.success("sign out success !");
    });
  },
  login: async (e, email, password) => {
    e.preventDefault();
    try {
      
      await signInWithEmailAndPassword(auth, email, password).then((res) => {
        toast.success("Success loged in !");
        localStorage.setItem("user", JSON.stringify(res.user));
        getDoc(doc(db, "users", String(res.user.uid))).then((res) => {
          // localStorage.setItem("user-details", JSON.stringify(res.data()));
          set((state) => ({ userDetailsInfo: res.data() }));
          window.location.href = "/";
        });
      });
    } catch (error) {
      toast.error("Email yoki passwofd notog'ri !");
      console.log("auth error", error);
    }
  },
  getUser: (uid) => {
    set(() => ({ userLoading: true }));
    getDoc(doc(db, "users", String(uid))).then((res) => {
      set((state) => ({ userDetailsInfo: res.data() }));
      set(() => ({ userLoading: false }));
    });
  },
  getAllUsers: async (setAllUsers, colRef) => {

    // console.log(docs);
    // onSnapshot(collection(db, colRef), (snapshot) => {
    //   setAllUsers(snapshot.docs.map((doc) => doc.data()));
    // });
  },
  createUser: async (email, password, fullName, role, setIsOpen) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        email,
        role,
        fullName,
        phoneNumber: "",
        photoUrl: "",
        bio: "",
        token: user.accessToken,
        emailVerified: user.emailVerified,
      })
        .then(() => {
          toast.success("User success created !");
          setIsOpen(false);
        })
        .catch((err) => {
          console.log("catch error", err);
        });
    } catch (error) {
      toast.error("Error created user !");
      console.log("created user error", error);
    }
  },
  updateUser: async (userEmail, userFullName, userRole, userUid, setIsOpen) => {
    await updateDoc(doc(db, "users", userUid), {
      email: userEmail,
      fullName: userFullName,
      role: userRole,
    }).then(() => {
      toast.success("User success updates");
      setIsOpen(false);
    });
  },
  deleteUser: async (user) => {
    await deleteDoc(doc(db, "users", user.id)).then(() =>
      toast.success("User accaunt deleted successfuly !")
    );
  },
  resetPassword: (e, email) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success("Email pochtangizga parol o'zgartirish linki jo'natildi !");
      window.location.href = "/login";
    });
  },
}));

export default useStore;
