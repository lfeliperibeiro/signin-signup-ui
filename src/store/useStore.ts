import create from 'zustand';
import produce from 'immer';

type UserType = {
  userEmail: string;
  setUser: (userEmail: string) => void;
};

export const useStore = create<UserType>((set) => ({
  userEmail: '',
  setUser: (userEmail) =>
    set(
      produce((state) => ({
        ...state,
        userEmail,
      }))
    ),
}));
