const express = require('express');
const router = express.Router();

const schoolController = require('../controllers/schoolController')

router.get('/allschools', schoolController.getAllSchools);
router.get('/school/id/:id', schoolController.getSchoolById);
router.get('/school/state/:id', schoolController.getSchoolByState);

module.exports = router;