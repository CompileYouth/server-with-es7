import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
    console.log("Get all /api request");
})
router.use("/tpi", require("./../../tpi/api/").default); // default 的原因：

export default router;
