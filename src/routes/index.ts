import { Hono } from "hono"
import mailRoute from "./mail"

const routes = new Hono()

routes.route("/mail", mailRoute)

export default routes