import { Router } from 'express';
import QuotationController from "../../controllers/quotation/quotation.controller";
import { checkAuth } from '../../middleware/checkAuth';

const quotationRoutes = Router();

// Rotas POST
quotationRoutes.post("/quotation-with-addresses", checkAuth, QuotationController.createWithAddresses);

// Rotas GET
quotationRoutes.get("/quotation", checkAuth, QuotationController.findAll);
quotationRoutes.get("/quotation/:id", checkAuth, QuotationController.findOne);
quotationRoutes.get("/quotation-by-cpf/:cpf", checkAuth, QuotationController.findAllByCPF);
quotationRoutes.get("/quotation-no-offers", checkAuth, QuotationController.findAllWithoutApprovedOffers);

// // Rotas PUT e DELETE
quotationRoutes.put("/quotation/:id", checkAuth, QuotationController.update);
quotationRoutes.delete("/quotation/:id", checkAuth, QuotationController.deleteOne);

export default quotationRoutes;