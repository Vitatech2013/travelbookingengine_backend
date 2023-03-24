import { Router } from 'express'

import {
  addtours,
  viewfeedback,
  viewtours,
  searchTours,
  destroy,
  update,
  show,
  adminloginpage,adminforgotPassword, updateProfile
} from './controller'

const router = new Router()

router.post('/addtours', addtours)

router.get('/adminlogin', adminloginpage)

router.get('/viewfeedback', viewfeedback)

router.get('/forgotPassword', adminforgotPassword);

router.get('/viewtours', viewtours)

router.get('/searchTours', searchTours)

router.delete('/:id', destroy)

router.put('/:id', update)

router.put('/updateProfile/:id', updateProfile)

router.get('/:id', show)

export default router
