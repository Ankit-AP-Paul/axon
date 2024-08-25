import { create } from "zustand";

interface walletStore {
    walletAddress: string | undefined;
    setWalletAddress: (value: string) => void;
    resetWalletAddress: () => void;
}

export const useSidebar = create<walletStore>((set) => ({
    walletAddress: undefined,
    setWalletAddress: (value) => set(() => ({ walletAddress: value })),
    resetWalletAddress: () => set(() => ({ walletAddress: undefined }))
}))
