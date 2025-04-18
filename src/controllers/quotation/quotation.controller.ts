import { Request, Response } from "express";
import createQuotationWithAddressesUsecase, {
    TCreateQuotationWithAddresses,
} from "../../services/quotation/create-quotation";
import quotationRepository from "../../repositories/quotation/quotation.repository";

async function createWithAddresses(req: Request<{}, {}, TCreateQuotationWithAddresses>, res: Response): Promise<void> {
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
        const requestBody = req.body;
        const result = await createQuotationWithAddressesUsecase(requestBody);
        res.status(201).send(result);
    } catch (ex) {
        console.log({ ex });
        res.status(500).send("Internal Server Error");
    }
}

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
        const findAllResult = await quotationRepository.findAll();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findAllWithoutApprovedOffers(req: Request, res: Response): Promise<void> {
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
        const findAllResult = await quotationRepository.findAllWithoutApprovedOffers();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findAllByCPF(req: Request, res: Response): Promise<void> {
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
        const idToFind = req.params.cpf;
        const findAllResult = await quotationRepository.findAllByCPF({ cpf: idToFind });
        if (!findAllResult.length) {
            res.status(400).send("Erro");
            return;
        }
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
        const findOneResult = await quotationRepository.findOne({ id: idToFind });
        res.status(200).send(findOneResult);
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
        const createResult = await quotationRepository.create({ data: body });
        res.status(201).send(createResult);
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
        const updateReturn = await quotationRepository.update({ data: body });
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
        const deleteReturn = await quotationRepository.delete({ id: idToFind });

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

const QuotationController = {
    findOne,
    findAll,
    findAllByCPF,
    findAllWithoutApprovedOffers,
    create,
    update,
    deleteOne,
    createWithAddresses,
};

export default QuotationController;