const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function userSignIn(
  address: string,
  publicKey: string,
  signature: string
) {
  try {
    const res = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      body: JSON.stringify({
        address,
        publicKey,
        signature,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    return data.message;
  } catch (err) {
    console.error(err);
  }
}

export async function logout() {
  try {
    const res = await fetch(`${API_URL}/auth/logout`, {
      credentials: "include",
    });

    const data = await res.json();

    return data.message;
  } catch (err) {
    console.error(err);
  }
}

export async function getContractor() {
  try {
    const res = await fetch(`${API_URL}/auth/get-contractor`, {
      credentials: "include",
    });

    const data = await res.json();

    return data.contractor;
  } catch (err) {
    console.error(err);
  }
}

export async function getProvider() {
  try {
    const res = await fetch(`${API_URL}/auth/get-provider`, {
      credentials: "include",
    });

    const data = await res.json();

    return data.provider;
  } catch (err) {
    console.error(err);
  }
}

export async function contractorProfile(name: string, email: string) {
  try {
    const res = await fetch(`${API_URL}/auth/contractor-signup`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    return data.message;
  } catch (err) {
    console.error(err);
  }
}

export async function providerProfile(name: string, email: string) {
  try {
    const res = await fetch(`${API_URL}/auth/provider-signup`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    return data.message;
  } catch (err) {
    console.error(err);
  }
}

export async function getPresignedURL(filename: string) {
  try {
    const res = await fetch(
      `${API_URL}/store/presignedUrl?filename=${filename}`,
      {
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllMachines() {
  try {
    const res = await fetch(`${API_URL}/machine/`);

    const data = await res.json();

    return data.machines;
  } catch (err) {
    console.error(err);
  }
}

export async function createMachine(title: string, cpu: number, ram: number, size: number) {
  try {
    const res = await fetch(`${API_URL}/machine/create`, {
      method: "POST",
      body: JSON.stringify({
        title,
        cpu,
        ram,
        size,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    const data = await res.json()

    return data.message

  } catch (err) {
    console.error(err);
  }
}

export async function getMyMachines() {
  try {
    const res = await fetch(`${API_URL}/machine/my-machines`, {
      credentials: 'include',
    });

    const data = await res.json()

    return data.machines

  } catch (err) {
    console.error(err)
  }
}

export async function rentMachine(machineID: string) {
  try {
    const res = await fetch(`${API_URL}/machine/create`, {
      method: "POST",
      body: JSON.stringify({
        machineID
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    })

    const data = await res.json()

    return data.message

  } catch (err) {
    console.error(err)
  }
}
