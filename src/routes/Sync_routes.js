import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/synclocales',controller.Locales_sync)

export default router