import { TezosOperationType } from "@airgap/beacon-sdk";
import { wallet } from "./wallet-config";

export async function sendTezos(amount: number) {
    amount = amount * 1000000;
    const amt = amount.toString();
    const response = await wallet.sendOperations([
        {
            kind: TezosOperationType.TRANSACTION,
            amount: amt, //amount in mutez (1 tez = 1,000,000 mutez)
            destination: "tz1bgjn4fxYVsoiWxiueYF2jXog1qJjVHCaM", //destination address
        },
    ]);

    console.log(`Operation hash: ${response}`)
}