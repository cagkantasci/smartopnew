"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const testUtils_1 = require("./testUtils");
// Test için örnek JWT tokenlar (gerçek uygulamada dinamik üretilebilir)
const adminToken = (0, testUtils_1.generateTestToken)('admin');
const managerToken = (0, testUtils_1.generateTestToken)('manager');
const operatorToken = (0, testUtils_1.generateTestToken)('operator');
describe('Maintenance Routes RBAC', () => {
    describe('POST /maintenance/add', () => {
        it('should allow admin', async () => {
            const res = await (0, supertest_1.default)(app_1.default)
                .post('/api/maintenance/add')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ /* örnek bakım verisi */});
            expect([200, 201]).toContain(res.statusCode);
        });
        it('should allow manager', async () => {
            const res = await (0, supertest_1.default)(app_1.default)
                .post('/api/maintenance/add')
                .set('Authorization', `Bearer ${managerToken}`)
                .send({ /* örnek bakım verisi */});
            expect([200, 201]).toContain(res.statusCode);
        });
        it('should forbid operator', async () => {
            const res = await (0, supertest_1.default)(app_1.default)
                .post('/api/maintenance/add')
                .set('Authorization', `Bearer ${operatorToken}`)
                .send({});
            expect(res.statusCode).toBe(403);
        });
    });
    describe('GET /maintenance/upcoming', () => {
        it('should allow all roles', async () => {
            for (const token of [adminToken, managerToken, operatorToken]) {
                const res = await (0, supertest_1.default)(app_1.default)
                    .get('/api/maintenance/upcoming')
                    .set('Authorization', `Bearer ${token}`);
                expect(res.statusCode).toBe(200);
            }
        });
    });
});
