/** @format */

const Sequilize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
	title: {
		type: Sequilize.STRING,
	},
	description: {
		type: Sequilize.STRING,
	},
	salary: {
		type: Sequilize.STRING,
	},
	company: {
		type: Sequilize.STRING,
	},
	email: {
		type: Sequilize.STRING,
	},
	new_job: {
		type: Sequilize.INTEGER,
	},
});

module.exports = Job;
