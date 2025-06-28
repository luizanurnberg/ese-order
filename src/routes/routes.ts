import { Router } from "express";
import offerRoutes from "./offer/offer.routes";
import quotationRoutes from "./quotation/quotation.routes";

const router = Router();
router.use("/api", quotationRoutes, offerRoutes);

export default router;
