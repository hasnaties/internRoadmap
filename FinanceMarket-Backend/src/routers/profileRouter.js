import express from 'express';
import { getProfile } from '../utils/profileUtil.js';


const router = new express.Router();
router.get('/api/profile', getProfile);

export default router;