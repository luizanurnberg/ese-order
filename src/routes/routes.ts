import { Router } from "express";
import quotationRoutes from "./quotation/quotation.routes";
import offerRoutes from "./offer/offer.routes";

const router = Router();
router.use("/api", quotationRoutes, offerRoutes);

export default router;
