import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

interface MainAddress {
  address: string;
  setCurrentAddress: (address: string) => void;
  users: {
    address: string;
    balance: number;
    isLoggedIn: boolean;
  };
  setUsers: () => void;
  userCount: object[];
  setUserCount: () => void;
}

export const usersStore = () =>
  createStore<MainAddress>((set, get) => ({
    address: '',
    setCurrentAddress: (value: string) => set({ address: value }),
    users: { address: '', balance: 0, isLoggedIn: false },
    setUsers: () =>
      set((state) => ({
        users: { ...state.users, isLoggedIn: true },
      })),
    userCount: [],
    setUserCount: () =>
      set({
        userCount: [{ users: get().users, address: get().address }],
        address: '',
        users: {
          address: '',
          balance: 0,
          isLoggedIn: false,
        },
      }),
  }));

export const MainContex = createContext<ReturnType<typeof usersStore> | null>(
  null
);

export const useUserInfo = () =>
  useStore(useContext(MainContex)!, (state) => state.users);
export const useCurrentUser = () =>
  useStore(useContext(MainContex)!, (state) => state.users.address);
export const useUserCount = () =>
  useStore(useContext(MainContex)!, (state) => state.userCount.length);
export const useAddressUser = () =>
  useStore(useContext(MainContex)!, (state) => state.address);
