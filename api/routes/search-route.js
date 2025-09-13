import { Router } from 'express'

const _search = Router()

_search.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Search Route' })
})

_search.post('/', (req, res, next) => {
  res.status(200).json({ msg: 'Book Find' })
})

export { _search }
