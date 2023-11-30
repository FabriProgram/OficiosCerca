import { Router } from 'express'
import { getPersonas } from '../controllers/persona.control';

const router = Router();

router.get('/', getPersonas)

export default router;