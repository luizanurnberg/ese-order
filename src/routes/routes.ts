import { Router } from "express";
import quotationRoutes from "./quotation/quotation.routes";

const router = Router();
router.use("/api", quotationRoutes);

export default router;
