import { Router } from "express";
import { getPriorities } from "../controllers/priority.js";

const router = Router();

router.get("/", getPriorities);
// router.post("/", createPriority);
// router.patch("/id", updatePriority);
// router.delete("/:id", deletePriority);

export default router;
