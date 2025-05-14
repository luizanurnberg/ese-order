import { Router } from "express";
import OfferController from "../../controllers/offer/offer.controller";
import { checkAuth } from "../../middleware/checkAuth";

const offerRoutes = Router();

// Rotas POST
offerRoutes.post("/offer", checkAuth, OfferController.create);
offerRoutes.post("/approveOffer", checkAuth, OfferController.approveOffer);

// Rotas GET
offerRoutes.get("/offer", checkAuth, OfferController.findAll);
offerRoutes.get("/offer/:id", checkAuth, OfferController.findOne);
offerRoutes.get("/offerByQuotation/:id", checkAuth, OfferController.findOfferByQuotationId);

// Rotas DELETE e PUT
offerRoutes.delete("/offer/:id", checkAuth, OfferController.delete);
offerRoutes.put("/offer", checkAuth, OfferController.update);

export default offerRoutes;
