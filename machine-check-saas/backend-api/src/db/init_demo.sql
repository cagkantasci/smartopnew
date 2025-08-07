-- Demo tablo ve veri oluşturma scripti
CREATE TABLE IF NOT EXISTS companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  tenant_id VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  company_id INTEGER REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS equipments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_id INTEGER REFERENCES companies(id),
  type VARCHAR(255),
  plate VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reports (
  id SERIAL PRIMARY KEY,
  operator_id INTEGER,
  equipment_id INTEGER REFERENCES equipments(id),
  checklist_id INTEGER,
  status VARCHAR(20),
  photos TEXT[],
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Demo veri ekle
INSERT INTO companies (id, name, tenant_id) VALUES (1, 'Demo Şirket', 'demo-tenant') ON CONFLICT (id) DO NOTHING;
INSERT INTO users (id, name, email, password, role, company_id) VALUES (1, 'Demo Admin', 'demo@demo.com', '$2a$10$Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9QOQ9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9', 'admin', 1) ON CONFLICT (id) DO NOTHING;
INSERT INTO equipments (id, name, company_id, type, plate) VALUES (1, 'Test Makine', 1, 'Kompresör', 'ABC123') ON CONFLICT (id) DO NOTHING;
INSERT INTO reports (id, operator_id, equipment_id, checklist_id, status, photos, description) VALUES (1, 1, 1, 1, 'pending', ARRAY[''], 'Test açıklama') ON CONFLICT (id) DO NOTHING;
