import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
    // Use the following code to block request.
    next();
})
router.use("/tpi", require("./../../tpi/api/").default); // default 的原因：

export default router;
