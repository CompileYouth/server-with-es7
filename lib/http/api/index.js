import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
    // Use the following code to block request.
    next();
})
router.use("/tpi", require("./../../tpi/api/").default);
router.use("/blo", require("./../../blo/api/").default);

export default router;
