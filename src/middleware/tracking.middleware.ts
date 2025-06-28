export async function addressMiddleware(address: any, token: string) {
    try {
        const response = await fetch("http://api-gateway:8080/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(address),
        });

        if (!response.ok) {
            throw new Error("Falha ao criar os endereços nos microsserviços");
        }

        const data = await response.json();

        return {
            address: data,
        };
    } catch (err) {
        console.error("Erro no addressMiddleware:", err);
        throw err;
    }
}

export async function deliveryProcessMiddleware(process: any, token: string) {
    try {
        const response = await fetch("http://api-gateway:8080/delivery", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(process),
        });

        if (!response.ok) {
            throw new Error("Falha ao criar o delivery process nos microsserviços");
        }

        const data = await response.json();

        return {
            process: data,
        };
    } catch (err) {
        console.error("Erro no deliveryProcessMiddleware:", err);
        throw err;
    }
}
