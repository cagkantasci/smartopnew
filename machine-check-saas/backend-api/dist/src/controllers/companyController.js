"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanies = exports.createCompany = void 0;
// Geçici firma verisi (veritabanı yerine)
const companies = [];
const createCompany = (req, res) => {
    const { name, tenant_id } = req.body;
    const company = { id: companies.length + 1, name, tenant_id };
    companies.push(company);
    res.status(201).json({ message: "Firma oluşturuldu", company });
};
exports.createCompany = createCompany;
const getCompanies = (req, res) => {
    res.json(companies);
};
exports.getCompanies = getCompanies;
