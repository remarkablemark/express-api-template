import { Router } from 'express';

const router = Router();

/**
 * GET /
 */
router.get('/', (req, res) => {
  res.send('OK');
});

export default router;
