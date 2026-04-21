import { Router } from 'express';
import * as authCtrl from '../controller/auth.contoller';

const router = Router();

router.post('/login', authCtrl.login );

export default router;