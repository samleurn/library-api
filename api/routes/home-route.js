import { Router } from "express"

const _home = Router()

_home.get('/', (req, res, next) => {
    res.send('Hello World')
})

export { _home }