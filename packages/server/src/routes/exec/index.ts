import express from 'express'
import execController from '../../controllers/exec'
const router = express.Router()

// GET
router.post('/', execController.executeCommand)

export default router
