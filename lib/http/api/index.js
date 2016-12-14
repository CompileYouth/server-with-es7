import { Router } from "express";

const router = Router();

router.use("/tpi", require("../../api/tpi/api/index.js"));

export default router;
