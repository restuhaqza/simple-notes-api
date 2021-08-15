const repository = require('../repository/notes')

function create(data) {
  let newData = repository.save(data)
  return newData
}

function getAll(){
  let data = repository.findAll()
  return data
}

function getById(id){
  let data = repository.findById(id)
  return data
}

function update(data){
  let newData = repository.update(data)
  return newData
}

function deleteById(id){
  let data = repository.remove(id)
  return data
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById
}