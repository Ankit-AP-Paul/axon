"use client";
import { images } from "@/constants/images/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Wallet2 } from "lucide-react";
import dynamic from "next/dynamic";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { stringToBytes } from "@taquito/utils";
import {
  NetworkType,
  RequestSignPayloadInput,
  SigningType,
} from "@airgap/beacon-sdk";
import { logout, userSignIn } from "@/lib/apiCalls";

const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com");
const wallet = new BeaconWallet({
  name: "Axon",
  network: { type: NetworkType.GHOSTNET }
})

function messageToHexExpr(message: string) {
  const bytes = stringToBytes(message)
  const bytesLength = (bytes.length / 2).toString(16)
  const addPadding = `00000000${bytesLength}`
  const paddedBytesLength = addPadding.slice(addPadding.length - 8)
  const hexExpr = '05' + '01' + paddedBytesLength + bytes

  return hexExpr
}

Tezos.setWalletProvider(wallet)

const NavbarMain = () => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined)

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

    if (!address || !publicKey) return

    const message = `Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`

    const payload: RequestSignPayloadInput = {
      signingType: SigningType.MICHELINE,
      payload: messageToHexExpr(message),
      sourceAddress: address
    }

    const response = await wallet.client.requestSignPayload(payload)

    if (!response) return

    await userSignIn(address, publicKey, response.signature)
  }

  const disconnect = async () => {
    await wallet.client.clearActiveAccount()
    setWalletAddress(undefined)
    await logout()
  }

  return (
    <div className="sticky top-4 px-[5%]">
      <nav className="px-[2%] rounded-md offsetEffect bg-[#b3a2e5]  py-2 border border-black flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={images["log-black"]} height={40} width={40} alt="lgo" />
          <span className="font-bold text-lg">Axon</span>
        </div>
        <div className="font-medium md:flex hidden gap-2 items-center w-max">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/rent">Renting</Link>
          <Button
            asChild
            className="bg-white border hover:text-white border-black ml-2 text-black rounded-md offsetstyle"
          >
            <Link href="/onboard">Sign in</Link>
          </Button>

        </div>
        <Button onClick={!walletAddress ? connect : disconnect} >{!walletAddress ? "Connect" : "Disconnect"}</Button>

        <Button className="aspect-square p-[10px] offsetstyle bg-white  text-black generalBorder md:hidden hover:text-white">
          <Menu size={30} />
        </Button>
      </nav>
    </div>
  );
}


export default dynamic(() => Promise.resolve(NavbarMain), { ssr: false });
