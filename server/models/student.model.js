const mongoose = require('mongoose');

const StudentReport = new mongoose.Schema({
    regNo: {
        type: String,
        required: true,
        unique: true
    },
    classId: {
        type: String,
        required: true
    },
    yearReport: [{
        year: {
            type: Number,
            required: true
        },
        yearComment: {
            type: String,
            required: true
        },
        termReport: [{
            term: {
                type: Number,
                required: true
            },
            report: {
                personalQA: [{
                    question: String,
                    answer: String
                }],
                socialQA: [{
                    question: String,
                    answer: String
                }],
                academicQA: [{
                    question: String,
                    answer: String
                }],
                occupationalQA: [{
                    question: String,
                    answer: String
                }],
                recreationalQA: [{
                    question: String,
                    answer: String
                }],
            },

            termComment: {
                type: String
            },
            personalComment: {
                type: String
            },
            occupationalComment: {
                type: String
            },
            recreationalComment: {
                type: String
            },
            academicComment: {
                type: String
            },
            socialComment: {
                type: String
            }
        }]
        ,
        yearPersonalComment: {
            type: String
        },
        yearOccupationalComment: {
            type: String
        },
        yearRecreationalComment: {
            type: String
        },
        yearAcademicComment: {
            type: String
        },
        yearSocialComment: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Student', StudentReport);