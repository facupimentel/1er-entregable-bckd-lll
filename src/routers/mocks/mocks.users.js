import {Router} from "express"
import { createMockUser } from "../../controllers/mocks.controller.js"

const routerMock = Router()

routerMock.post("/:uid", createMockUser )



export default routerMock