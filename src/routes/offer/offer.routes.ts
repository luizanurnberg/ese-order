import { Router } from "express";
import OfferController from "../../controllers/offer/offer.controller";

const offerRoutes = Router();

// Rotas POST
offerRoutes.post("/offer", OfferController.create);
offerRoutes.post("/approveOffer", OfferController.approveOffer);

// Rotas GET
offerRoutes.get("/offer", OfferController.findAll);
offerRoutes.get("/offer/:id", OfferController.findOne);
offerRoutes.get("/offerByQuotation/:id", OfferController.findOfferByQuotationId);

// Rotas DELETE e PUT
offerRoutes.delete("/offer/:id", OfferController.delete);
offerRoutes.put("/offer", OfferController.update);

export default offerRoutes;
