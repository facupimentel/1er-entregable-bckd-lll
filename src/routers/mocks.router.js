import { Router } from "express";
import routerMock from "./mocks/mocks.users.js";
import { readAllMocks, createMockPet } from "../controllers/mocks.controller.js";

const router = Router()

router.use("/api/mocks", routerMock)
router.get("/mockingusers", readAllMocks)
router.post("/generateData", createMockPet)


export default router