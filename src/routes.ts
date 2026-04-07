import {response, Router} from "express"

import desenhosController from "./controllers/desenhos"
import personagensController from "./controllers/personagens"

const routes = Router();

routes.get("/", (request, response) => response.status(200).json({ success: true}))

routes.get("/char:id", personagensController.getById)

routes.get("/char", personagensController.list)

routes.post("/char", personagensController.create)

routes.put("/char", personagensController.update)

routes.delete("/char", personagensController.delete)

//

routes.get("/desenho", desenhosController.list)

routes.post("/desenho", desenhosController.create)

routes.get("/desenho/:id", desenhosController.getById)

routes.delete("/desenho/:id", desenhosController.delete)

routes.put("/desenho/:id", desenhosController.update)

//

routes.put("/conectar:id", personagensController.conectar)

routes.delete("/desconectar:id", personagensController.desconectar)

export default routes