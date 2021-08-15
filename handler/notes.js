/**
 * 1. Menambahkan Notes - POST /notes
 * 2. Fetching semua notes - GET /notes
 * 3. Fetching notes by id - GET /notes/:id
 * 4. Update notes - PUT /notes
 * 5. Remove notes - DELETE /notes/:id
 */

const service = require('../service/notes')

/**
 * 
 * @param {*} req 
 * @param {*} res
 * // fetching data store 
 * // input data
 * // save 
 */
function create(req, res){
  let data = service.create(req.body)
  res.status(200).json(data)
}

/**
 * Fetching All Data
 */
function getAll(req, res){
  let data = service.getAll()
  res.status(200).json(data)
}

/**
 * 
 */
function getById(req, res){
  let data = service.getById(req.params.id)
  if(!data) return res.status(404).json({
    message: 'Data not found'
  })
  res.status(200).json(data)
}

function update(req, res){
  let data = service.update(req.body)
  if(!data) return res.status(404).json({
    message: 'Data not found'
  })

  res.status(200).json(data)
}

function deleteById(req, res){
  let data = service.deleteById(req.params.id)
  if(!data) return res.status(404).json({
    message: 'Data not found'
  })

  res.status(200).json(data)
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById
}