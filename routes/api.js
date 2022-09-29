import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

router.post('/ingredients', apiCtrl.create)
router.get('/ingredients', apiCtrl.index)
router.delete('/ingredients/:id', apiCtrl.delete)

export {
  router
}