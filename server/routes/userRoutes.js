import express from 'express'
import { clerkWebhooks } from '../controllers/UserControllor.js'
const userRouter=express.Router()
userRouter.post('/webhooks',clerkWebhooks)

export default  userRouter