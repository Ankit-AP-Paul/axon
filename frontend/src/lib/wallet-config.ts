import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com");
const wallet = new BeaconWallet({
  name: "Next App",
  network: { type: NetworkType.GHOSTNET },
});
Tezos.setWalletProvider(wallet);

export { Tezos, wallet };
