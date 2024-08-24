const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export async function userSignIn(publicKey: string, signature: string) {
    try {
        const res = await fetch(`${API_URL}/signin`, {
            method: 'POST',
            body: JSON.stringify({
                publicKey,
                signature
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })

        const data = await res.json()

        return data
    }
    catch (err) {
        console.error(err)
    }
}


export async function logout() {
    try {
        const res = await fetch(`${API_URL}/logout`, {
            credentials: 'include'
        })

        const data = await res.json()

        return data.message
    }
    catch (err) {
        console.error(err)
    }
}

export async function getPresignedURL(filename: string) {
    try {
        const res = await fetch(`${API_URL}/presignedUrl?filename=${filename}`, {
            credentials: 'include'
        })

        const data = await res.json()

        return data
    }
    catch (err) {
        console.error(err)
    }
}
