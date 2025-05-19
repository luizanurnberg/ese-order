
export async function addressMiddleware(address: any, token: string) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    try {
        const response = await fetch("http://ese-tracking:3000/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(address)
        });

        if (!response.ok) {
            throw new Error('Falha ao criar os endereços nos microsserviços');
        }

        const data = await response.json();

        return {
            address: data,
        };
    } catch (err) {
        console.error('Erro no addressMiddleware:', err);
        throw err;
    }
}
