import { UUID } from "crypto";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserStoreState {
  userId: UUID | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  authToken: string | null;
  refreshToken: string | null;
  signin: (
    userId: UUID,
    name: string,
    email: string,
    phone: string,
    authToken: string,
    refreshToken: string
  ) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

export const userStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      userId: null,
      name: null,
      email: null,
      phone: null,
      authToken: null,
      refreshToken: null,

      signin: (userId, name, email, phone, authToken, refreshToken) =>
        set({ userId, name, email, phone, authToken, refreshToken }),

      logout: () =>
        set({
          userId: null,
          name: null,
          email: null,
          phone: null,
          authToken: null,
          refreshToken: null,
        }),

      isLoggedIn: () => !!get().authToken,
    }),
    {
      name: "user-storage", // key in storage
      storage: createJSONStorage(() => localStorage), // ✅ wrap it correctly
    }
  )
);
