import { AuthStore } from "@/config/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userData: null,
      token: null,
      setUserData: (data) => set({ userData: data }),
      setToken: (token) => set({ token }),
      logout: () => set({ userData: null, token: null }),
    }),
    {
      name: "auth-speedcode",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
