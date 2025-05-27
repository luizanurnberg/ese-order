
export async function paymentMiddlware(payment: any, token: string) {
    try {
        const response = await fetch("http://api-gateway:8080/payments/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payment)
        });

        if (!response.ok) {
            throw new Error('Falha ao criar o pagamento nos microsserviços');
        }

        const data = await response.json();

        return {
            payment: data,
        };
    } catch (err) {
        console.error('Erro no paymentMiddlware:', err);
        throw err;
    }
}
