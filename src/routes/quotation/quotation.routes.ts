import { Router } from 'express';
import QuotationController from "../../controllers/quotation/quotation.controller";
import { authMiddleware } from '../../middleware/auth.middleware';

const quotationRoutes = Router();

// Rotas POST
quotationRoutes.post("/quotation-with-addresses", authMiddleware, QuotationController.createWithAddresses);

// Rotas GET
quotationRoutes.get("/quotation", authMiddleware, QuotationController.findAll);
quotationRoutes.get("/quotation/:id", authMiddleware, QuotationController.findOne);
quotationRoutes.get("/quotation-by-cpf/:cpf", authMiddleware, QuotationController.findAllByCPF);
quotationRoutes.get("/quotation-no-offers", authMiddleware, QuotationController.findAllWithoutApprovedOffers);

// // Rotas PUT e DELETE
quotationRoutes.put("/quotation/:id", authMiddleware, QuotationController.update);
quotationRoutes.delete("/quotation/:id", authMiddleware, QuotationController.deleteOne);

export default quotationRoutes;