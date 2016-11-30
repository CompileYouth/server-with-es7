import { Router } from "express";

import TPIService from "../../../tpi/logic/TPIService.js";

const router = Router();
const tpiService = new TPIService();

router.get("/", async (req, res) => {
    const from = parseInt(req.query.from);
    if (isNaN(from)) {
        res.status(400).send(`Parameter "from" must be a UTC number.`);
        return;
    }
    const to = parseInt(req.query.to);
    if (isNaN(to)) {
        res.status(400).send(`Parameter "to" must be a UTC number.`);
        return;
    }

    const result = await tpiService.getIndexByTimeRange(new Date(from), new Date(to));
    res.send(result);
});

export default router;
