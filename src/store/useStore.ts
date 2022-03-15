import create from 'zustand';
import produce from 'immer';

type UserType = {
  token: string;
  setToken: (token: string) => void;
};

export const useStore = create<UserType>((set) => ({
  token: '',
  setToken: (token) =>
    set(
      produce((state) => ({
        ...state,
        token,
      }))
    ),
}));
