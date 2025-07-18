import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profileImage: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logoutUser: () => void;
}

const userStore: StateCreator<UserStore> = (set) => {
  return {
    user: null,
    setUser: (user: User) => {
      set(function () {
        return { user };
      });
    },
    logoutUser: () => {
      set(() => ({ user: null }));
      sessionStorage.clear(); // if you’re using session storage
      localStorage.removeItem("BlogIt-User"); // ✅ clear persisted user
    },
  };
};

const useUser = create(persist(userStore, { name: "BlogIt-User" }));

export default useUser;
