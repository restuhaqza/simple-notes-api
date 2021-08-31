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
async function create(req, res){
  console.log(req.body)
  let data = await service.create(req.body)
  res.status(200).json(data)
}

/**
 * Fetching All Data
 */
async function getAll(req, res){
  let data = await service.getAll()
  res.status(200).json(data)
}

/**
 * 
 */
async function getById(req, res){
  let data = await service.getById(req.params.id)
  if(!data) return res.status(404).json({
    message: 'Data not found'
  })
  res.status(200).json(data)
}

async function update(req, res){
  let data = await service.update(req.body)
  if(!data) return res.status(404).json({
    message: 'Data not found'
  })

  res.status(200).json(data)
}

async function deleteById(req, res){
  let data = await service.deleteById(req.params.id)
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