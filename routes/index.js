const express = require('express');
const router = express.Router();

const ClassSurveyModel = require ('../models/ClassSurveyModel.js')

router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData;
    console.log("TOPIC DATA: ", topicData)
    res.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData
        },
        partials: {

        }
    })
});

module.exports = router;