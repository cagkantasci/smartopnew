
import request from 'supertest';
import app from '../src/app';
import { generateTestToken } from './testUtils';

// Test için örnek JWT tokenlar (gerçek uygulamada dinamik üretilebilir)
const adminToken = generateTestToken('admin');
const managerToken = generateTestToken('manager');
const operatorToken = generateTestToken('operator');

describe('Maintenance Routes RBAC', () => {
  describe('POST /maintenance/add', () => {
    it('should allow admin', async () => {
      const res = await request(app)
        .post('/api/maintenance/add')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ /* örnek bakım verisi */ });
      expect([200,201]).toContain(res.statusCode);
    });
    it('should allow manager', async () => {
      const res = await request(app)
        .post('/api/maintenance/add')
        .set('Authorization', `Bearer ${managerToken}`)
        .send({ /* örnek bakım verisi */ });
      expect([200,201]).toContain(res.statusCode);
    });
    it('should forbid operator', async () => {
      const res = await request(app)
        .post('/api/maintenance/add')
        .set('Authorization', `Bearer ${operatorToken}`)
        .send({});
      expect(res.statusCode).toBe(403);
    });
  });

  describe('GET /maintenance/upcoming', () => {
    it('should allow all roles', async () => {
      for (const token of [adminToken, managerToken, operatorToken]) {
        const res = await request(app)
          .get('/api/maintenance/upcoming')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
      }
    });
  });
});
