import { registerAs } from '@nestjs/config';

export interface I_AppConfig {
  appEnv: string;
  port: number;
  apiPrefix: string;
}

export default registerAs(
  'app',
  (): I_AppConfig => ({
    appEnv: process.env.APP_ENV,
    port: parseInt(process.env.APP_PORT) || 3001,
    apiPrefix: process.env.API_PREFIX || 'api',
  }),
);
