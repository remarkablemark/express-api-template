import { Router } from 'express';

const router = Router();

/**
 * GET /
 */
router.get('/', (request, response) => {
  response.send('OK');
});

export default router;
