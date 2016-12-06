import { Router } from "express";

import BloService from "../logic/BloService";

const router = Router();
const bloService = new BloService();

router.get("/:lineId/:direction/busLineInfo", async (req, res) => {
    try {
        console.log(req.params.lineId);
        const rowCount = await bloService.getBusLineInfo(req.params.lineId, req.params.direction);
        res.send(rowCount);
    }
    catch (error) {
        console.error(error);
        res.status(500).end();
    }
});

export default router;
