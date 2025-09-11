import { Router } from "express"

const _library = Router()

_library.get('/', (req, res, next) => {
    res.send('Lib')
})

export { _library }