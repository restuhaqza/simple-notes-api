const { noteModel } = require("../datastore/mongo/model/notes")
const uuid = require("uuid")
function save(data) {
  console.log(data)
  data["id"] = uuid.v4()
  return noteModel.create(data)
}

function findAll() {
  return noteModel.find()
}

function findById(id) {
  return noteModel.findOne({ id })
}

async function update(data) {
   const newData = await noteModel.findOne({id: data.id})
   if(!newData) return null

   newData.title = data.title
   newData.content = data.content
   
   return newData.save()
}

async function remove(id) {
  const newData = await noteModel.findOne({id})
   if(!newData) return null

   let repData = newData

   newData.remove()

   return repData
}

module.exports = {
  save,
  findAll,
  findById,
  update,
  remove,
}
