import { create } from 'zustand';

const useStore = create(set => ({
  theme: "light",
  viewClientFeesPopup: false,
  // SingleClientDetails: [
  // ],
  SingleClientDetails: [
    {
      "client_code": "",
      "first_entry_date": "",
      "chargeable_market_value": "",
      "management_fee_rate": "",
      "portfolio_pnl": "",
      "portfolio_value": "",
      "yearly_fees": "",
      "daily_fees": ""
    }
  ],
  setTheme: (newTheme) => set({ theme: newTheme }),
  setviewClientFeesPopup: (val) => set({ viewClientFeesPopup: val }),
  setSingleClientDetails: (val) => set({ SingleClientDetails: val }),
}));

export default useStore;
