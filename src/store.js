import { create } from 'zustand';

const useStore = create(set => ({
  theme: "light",
  viewClientFeesPopup: false,
  userName:localStorage.getItem('userName') || '',
  setUserName:(val) => set({ userName: val }),
  setTheme: (newTheme) => set({ theme: newTheme }),
  setviewClientFeesPopup: (val) => set({ viewClientFeesPopup: val }),
}));

export default useStore;
