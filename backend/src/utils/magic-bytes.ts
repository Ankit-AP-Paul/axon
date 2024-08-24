import { stringToBytes } from "@taquito/utils"

type byteType = 'block' | 'preendorsement' | 'endorsement' | 'generic' | 'pack'

const magicBytes = {
    block: '11',
    preendorsement: '12',
    endorsement: '13',
    generic: '03',
    pack: '05'
}

export function generateMessageWithMagicByte(message: string, type: byteType) {

    const magicByte = magicBytes[type]

    const messageBytes = stringToBytes(message)

    if (!magicByte) {
        throw new Error("Invalid type provided. Valid types are 'block', 'preendorsement', 'endorsement', 'generic', or 'pack'.")
    }

    return magicByte + messageBytes
}
