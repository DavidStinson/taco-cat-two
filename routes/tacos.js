import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)

router.post('/', isLoggedIn, tacosCtrl.create)
router.patch('/:id/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
router.put('/:id', isLoggedIn, tacosCtrl.update)
router.delete('/:id', isLoggedIn, tacosCtrl.delete)

export {
  router
}