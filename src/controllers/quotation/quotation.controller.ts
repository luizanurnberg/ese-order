import { Request, Response } from "express";
import quotationService from "../../services/quotation/quotation.service";
import quotationRepository from "../../repositories/quotation/quotation.repository";
import { TCreateQuotationWithAddresses } from "../../models/quotation/interfaces/Quotation.model";

async function createWithAddresses(req: Request<{}, {}, TCreateQuotationWithAddresses>, res: Response): Promise<void> {
    try {
        const requestBody = req.body;
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return;
        }
        const token = authHeader.split(" ")[1];
        const result = await quotationService.createQuotationWithAddressesUsecase(requestBody, token);
        res.status(201).send(result);
    } catch (ex) {
        console.log({ ex });
        res.status(500).send("Internal Server Error");
    }
}

async function findAll(req: Request, res: Response): Promise<void> {
    try {
        const findAllResult = await quotationService.findAll();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findAllWithoutApprovedOffers(req: Request, res: Response): Promise<void> {
    try {
        const findAllResult = await quotationService.findAllWithoutApprovedOffers();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function findAllByCPF(req: Request, res: Response): Promise<void> {
    try {
        const idToFind = req.params.cpf;
        const findAllResult = await quotationService.findAllByCPF(idToFind);
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
    const idToFind = req.params.id;
    try {
        const findOneResult = await quotationService.findOne(idToFind);
        res.status(200).send(findOneResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function create(req: Request, res: Response): Promise<void> {
    try {
        const body = req.body;
        const createResult = await quotationService.create(body);
        res.status(201).send(createResult);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function update(req: Request, res: Response): Promise<void> {
    try {
        const body = req.body;
        const updateReturn = await quotationService.update(body);
        res.status(204).send(updateReturn);
    } catch (error) {
        console.log({ error });
        res.status(500).send(error);
    }
}

async function deleteOne(req: Request, res: Response): Promise<void> {
    try {
        const idToFind = req.params.id;
        const deleteReturn = await quotationService.deleteOne(idToFind);

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