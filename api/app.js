import e from "express"

import { _api } from "./interface/api.js"

const app = e()

app.use(_api)

export { app }