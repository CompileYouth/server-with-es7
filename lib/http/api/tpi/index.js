import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    const from = parseInt(req.query.from);
    if (isNaN(from)) {
        res.status(400).send(`Parameter "from" must be a UTC number.`);
        return;
    }
    const to = parsetInt(req.query.to);
    if (isNaN(to)) {
        res.status(400).send(`Parameter "to" must be a UTC number.`);
        return;
    }
});

export default router;
