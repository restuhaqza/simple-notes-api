const repository = require('../repository/notes.js')

async function create(data) {
  let newData = await repository.save(data)
  return newData
}

async function getAll(){
  let data = await repository.findAll()
  return data
}

async function getById(id){
  let data = await repository.findById(id)
  return data
}

async function update(data){
  let newData = await repository.update(data)
  return newData
}

async function deleteById(id){
  let data = await repository.remove(id)
  return data
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById
}