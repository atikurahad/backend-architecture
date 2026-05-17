import express from 'express';

const router = express.Router();


import * as healthController from '../app/controllers/healthController.js'


router.get('/health', healthController.health);

export default router;