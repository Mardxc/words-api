import { Router } from "express";

import * as wordsCtrl from "../controllers/words.controller";

const router = Router();

router.get("/", wordsCtrl.getAll);
router.get("/:id", wordsCtrl.getOne);

export default router;
