import { Router } from "express";
import OfferController from "../../controllers/offer/offer.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const offerRoutes = Router();

// Rotas POST
offerRoutes.post("/offer", authMiddleware, OfferController.create);
offerRoutes.post("/offer/approve", authMiddleware, OfferController.approveOffer);

// Rotas GET
offerRoutes.get("/offer", authMiddleware, OfferController.findAll);
offerRoutes.get("/offer/:id", authMiddleware, OfferController.findOne);
offerRoutes.get("/offer/quotation/:id", authMiddleware, OfferController.findOfferByQuotationId);

// Rotas DELETE e PUT
offerRoutes.delete("/offer/:id", authMiddleware, OfferController.delete);
offerRoutes.put("/offer", authMiddleware, OfferController.update);

export default offerRoutes;
