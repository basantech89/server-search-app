const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const predictionRouter = express.Router();
predictionRouter.use(bodyParser.json());

predictionRouter.route('/')
	.get((req, res, next) => {
		fetch('https://www.zaubacorp.com/custom-search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `search=${req.query.searchTerm}&filter=company`,
		})
			.then(data => data.text())
			.then(data => {
				res.setHeader('Content-Type', 'text/html');
				res.send(data);
			})
			.catch(error => next(error))
	});

module.exports = predictionRouter;
