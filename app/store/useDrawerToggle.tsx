import { create } from "zustand";
type ToggleDrawer = {
  toggleDrawer: boolean;
  setToggleDrawer: () => void;
};

export const useToggleDrawer = create<ToggleDrawer>((set, get) => ({
  toggleDrawer: false,
  setToggleDrawer: () => {
    set((state) => ({ toggleDrawer: !get().toggleDrawer }));
  },
}));
