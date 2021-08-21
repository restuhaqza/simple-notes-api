const joi = require('joi')

const addNotes = joi.object({
  header: joi.object().unknown(),
  body: joi.object({
    title: joi.string().required(),
    content: joi.string().required()
  }).required(),
  query: joi.object().unknown()
})

module.exports = {
  addNotes
}