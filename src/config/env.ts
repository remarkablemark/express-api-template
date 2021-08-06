import { config } from 'dotenv';

config();

export const isProduction = process.env.NODE_ENV === 'production';

export const isTest = process.env.NODE_ENV === 'test';

/* istanbul ignore next */
export const port = process.env.PORT || '3000';
