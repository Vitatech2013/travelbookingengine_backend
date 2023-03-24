import { Router } from 'express'

import {
  registration,
  login,
  userloginpage,
  addbooking,
  viewbooking,
  viewuserbookings,
  addfeedback,
  chnagepassword,
  gettours,
  viewalluserbookings,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/', login)

router.get('/userlogin', userloginpage)

router.post('/', registration)

router.post('/userbooking', addbooking);

router.get('/getTours', gettours);

router.get('/forgotPassword', forgotPassword);

router.get('/viewbooking', viewbooking)

router.get('/viewuserbookings', viewuserbookings)

router.get('/viewalluserbookings', viewalluserbookings)

router.post('/addfeedback', addfeedback)

router.put('/:id', chnagepassword)

export default router
