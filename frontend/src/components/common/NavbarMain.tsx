"use client";
import { images } from "@/constants/images/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Wallet2 } from "lucide-react";

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { stringToBytes } from "@taquito/utils";
import {
  NetworkType,
  RequestSignPayloadInput,
  SigningType,
} from "@airgap/beacon-sdk";
import { userSignIn } from "@/lib/apiCalls";

const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com");
const wallet = new BeaconWallet({
  name: "Axon",
  network: { type: NetworkType.GHOSTNET },
});

const messageToHexExpr = (message: string) => {
  const bytes = stringToBytes(message);
  const bytesLength = (bytes.length / 2).toString(16);
  const addPadding = `00000000${bytesLength}`;
  const paddedBytesLength = addPadding.slice(addPadding.length - 8);
  const hexExpr = "05" + "01" + paddedBytesLength + bytes;

  return hexExpr;
};

Tezos.setWalletProvider(wallet);

export default function NavbarMain() {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(
    undefined
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
    const { address } = await wallet.client.requestPermissions();
    setWalletAddress(address);

    if (!address) return;

    const message = `Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;

    const payload: RequestSignPayloadInput = {
      signingType: SigningType.MICHELINE,
      payload: messageToHexExpr(message),
      sourceAddress: address,
    };

    const response = await wallet.client.requestSignPayload(payload);

    if (!response) return;

    await userSignIn(address, response.signature);
  };

  const disconnect = async () => {
    await wallet.client.clearActiveAccount();
    setWalletAddress(undefined);
  };

  return (
    <div className="flex w-full">
      <nav className="px-[2%] w-full bg-transparent  py-2  flex justify-between items-center">
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
          <Button className="bg-white border hover:text-white border-black ml-2 text-black rounded-md offsetstyle">
            <Link href="/onboard">Sign in</Link>
          </Button>
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

        <Button className="aspect-square p-[10px] offsetstyle bg-white  text-black generalBorder md:hidden hover:text-white">
          <Menu size={30} />
        </Button>
      </nav>
    </div>
  );
}
