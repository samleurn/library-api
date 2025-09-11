import { Router } from "express"

import { _home } from "../routes/home-route.js"
import { _library } from "../routes/library.js"

const _api = Router()

_api.use('/', _home)
_api.use('/library', _library)

export { _api }