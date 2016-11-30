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

    try {
        const result = await tpiService.getIndexByTimeRange(new Date(from), new Date(to));
        res.setHeader("Cache-Control", `max-age=${3600 * 24 * 365}`);
        res.send(result);
    }
    catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

export default router;
