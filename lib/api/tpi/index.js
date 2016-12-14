import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const from = req.query.from;
    const to = req.query.to;

    console.log(from, to);

    res.send(`We get queris: from = "${from}", to = "${to}"`);
});

export default router;
