import { Router } from "express";

const router = Router();
router.use("/tpi", require("./tpi").default); // default 的原因：

export default router;
