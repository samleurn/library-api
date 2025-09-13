import { Router } from 'express'

import { _home } from '../routes/home-route.js'
import { _library } from '../routes/library-route.js'
import { _search } from '../routes/search-route.js'

const _api = Router()

_api.use('/', _home)
_api.use('/library', _library)
_api.use('/search', _search)

export { _api }
