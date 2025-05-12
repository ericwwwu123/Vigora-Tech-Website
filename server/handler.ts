import express from 'express';
import { registerRoutes } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 注册 API 路由
registerRoutes(app);

// 导出 Netlify Functions handler
export const handler = app; 