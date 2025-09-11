import { Router } from "express"

import { _home } from "../routes/home-route.js"

const _api = Router()

_api.use('/', _home)

export { _api }