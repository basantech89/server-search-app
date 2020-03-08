const express = require('express');
const bodyParser = require('body-parser');
const Companies = require('../models/company');

const companyRouter = express.Router();
companyRouter.use(bodyParser.json());

companyRouter.route('/')
	.get((req, res, next) => {
		Companies.find()
			.then(companies => {
				res.setHeader('Content-Type', 'application/json');
				res.json(companies);
			})
			.catch(error => next(error));
	})
	.post((req, res, next) => {
		Companies.create(req.body)
			.then((company) => {
				res.setHeader('Content-Type', 'application/json');
				res.json(company);
			})
			.catch(error => next(error));
	});

module.exports = companyRouter;
