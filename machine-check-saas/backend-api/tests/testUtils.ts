import jwt from 'jsonwebtoken';

export function generateTestToken(role: 'admin' | 'manager' | 'operator') {
  const payload = {
    id: 1,
    name: `${role} user`,
    email: `${role}@test.com`,
    role,
    company_id: 1
  };
  const secret = process.env.JWT_SECRET || 'secret';
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}
