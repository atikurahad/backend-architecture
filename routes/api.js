import express from 'express';

const router = express.Router();


import * as healthController from '../app/controllers/healthController.js'
import * as demoController from '../app/controllers/demoController.js'

router.get('/health', healthController.health);

router.post('/demo', demoController.demo);
router.post('/demo2', demoController.demo2);
router.post('/demo3', demoController.demo3);
router.post('/demo4', demoController.demo4);
router.post('/demo5', demoController.demo5);
router.post('/demo6', demoController.demo6);

export default router; 