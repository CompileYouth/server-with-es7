import { Router } from "express";

const router = Router();

router.use("/tpi", require("../../api/tpi/api/index.js").default);

export default router;
