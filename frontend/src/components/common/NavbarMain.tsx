"use client";
import { images } from "@/constants/images/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { stringToBytes } from "@taquito/utils";
import {
  NetworkType,
  RequestSignPayloadInput,
  SigningType,
} from "@airgap/beacon-sdk";
import { logout, userSignIn } from "@/lib/apiCalls";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/store/useAddress";
import { Tezos, wallet } from "@/lib/wallet-config";

function messageToHexExpr(message: string) {
  const bytes = stringToBytes(message);
  const bytesLength = (bytes.length / 2).toString(16);
  const addPadding = `00000000${bytesLength}`;
  const paddedBytesLength = addPadding.slice(addPadding.length - 8);
  const hexExpr = "05" + "01" + paddedBytesLength + bytes;

  return hexExpr;
}

export default function NavbarMain() {
  const router = useRouter();

  const { walletAddress, setWalletAddress, resetWalletAddress } = useSidebar(
    (state) => state
  );

  useEffect(() => {
    const checkAccount = async () => {
      const beaconActiveAccount = await wallet.client.getActiveAccount();
      if (beaconActiveAccount) {
        setWalletAddress(beaconActiveAccount.address);
      }
    };

    checkAccount();
  }, []);

  const connect = async () => {
    const { address, publicKey } = await wallet.client.requestPermissions();
    setWalletAddress(address);

    if (!address || !publicKey) return;

    const message = `Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;

    const payload: RequestSignPayloadInput = {
      signingType: SigningType.MICHELINE,
      payload: messageToHexExpr(message),
      sourceAddress: address,
    };

    const response = await wallet.client.requestSignPayload(payload);

    if (!response) return;

    await userSignIn(address, publicKey, response.signature);
  };

  const disconnect = async () => {
    await wallet.client.clearActiveAccount();
    resetWalletAddress();
    await logout();
    router.push("/");
  };

  return (
    <div className="flex w-full">
      <nav className="px-[2%] w-full bg-transparent py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={images["logo"]} height={40} width={40} alt="lgo" />
          <span className="font-bold text-lg">Axon</span>
        </div>
        <div className="font-medium md:flex hidden gap-4 items-center w-max">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/rent">Renting</Link>
        </div>
        <div>
          <Button
            className={
              !walletAddress
                ? "bg-green-400 border hover:text-white border-black ml-2 text-black rounded-md offsetstyle"
                : "bg-red-400 border hover:text-white border-black ml-2 text-black rounded-md offsetstyle"
            }
            onClick={!walletAddress ? connect : disconnect}>
            {!walletAddress ? "Connect" : "Disconnect"}
          </Button>
        </div>

        <Button className="aspect-square p-[10px] offsetstyle bg-white text-black generalBorder md:hidden hover:text-white">
          <Menu size={30} />
        </Button>
      </nav>
    </div>
  );
}
