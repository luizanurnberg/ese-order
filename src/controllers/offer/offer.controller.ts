import { Request, Response } from "express";
import offerService from "../../services/offer/offer.service";

async function findAll(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    try {
        const findAllResult = await offerService.findAll();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findOne(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    const idToFind = req.params.id;
    try {
        const findOneResult = await offerService.findOne(idToFind);
        res.status(200).send(findOneResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findOfferByQuotationId(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    const idToFind = req.params.id;
    try {
        const foundOffers = await offerService.findOfferByQuotationId(idToFind);
        res.status(200).send(foundOffers);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function create(req: Request, res: Response): Promise<void> {
        /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    try {
        const body = req.body;
        const createResult = await offerService.create(body);
        res.status(201).send(createResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function approveOffer(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    try {
        const body = req.body;
        const createResult = await offerService.approveOfferUsecase(body.offer);
        res.status(200).send(createResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function update(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    try {
        const body = req.body;
        const updateReturn = await offerService.update(body);
        res.status(204).send(updateReturn);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function deleteOne(req: Request, res: Response): Promise<void> {
    /*
    // Verificar token
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).send("Token não fornecido");
        return;
    }
    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
        res.status(403).send("Token inválido");
        return;
    }
    */
    try {
        const idToFind = req.params.id;
        const deleteReturn = await offerService.deleteOne(idToFind);

        if (deleteReturn) {
            res.status(204).send("");
            return;
        }
        res.status(400).send("");
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

const OfferController = {
    findAll,
    findOne,
    create,
    update,
    delete: deleteOne,
    approveOffer,
    findOfferByQuotationId,
};

export default OfferController;
