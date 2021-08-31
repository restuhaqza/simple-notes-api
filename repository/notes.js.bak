const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
let filePath = path.join(__dirname, '/../datastore/notes.json')

function save(data){
  let content = fs.readFileSync(filePath, 'utf-8')
  if(!content) content = []
  else {
    content = JSON.parse(content)
  }

  data = {
    ...data,
    id: uuid.v4()
  }

  content.push(data)

  fs.writeFileSync(filePath, JSON.stringify(content), (error)=>{
    console.log(error)
  })

  return data
}

function findAll(){
  let content = fs.readFileSync(filePath, 'utf-8')
  if(!content) content = []
  else {
    content = JSON.parse(content)
  }

  return content
}

function findById(id){
  let content = fs.readFileSync(filePath, 'utf-8')
  if(!content) content = []
  else {
    content = JSON.parse(content)
  }

  return content.find(ele => ele.id == id)
}

function update(data){
  let content = fs.readFileSync(filePath, 'utf-8')
  if(!content) content = []
  else {
    content = JSON.parse(content)
  }

  let index = content.findIndex(ele => ele.id == data.id)
  if(index < 0) return null

  content[index] = data

  fs.writeFileSync(filePath, JSON.stringify(content), (error)=>{
    console.log(error)
  })

  return data
}

function remove(id){
  let content = fs.readFileSync(filePath, 'utf-8')
  if(!content) content = []
  else {
    content = JSON.parse(content)
  }

  let index = content.findIndex(ele => ele.id == id)
  if(index < 0) return null

  let data = content[index]
  content.splice(index, 1)

  fs.writeFileSync(filePath, JSON.stringify(content), (error) =>{
    console.log(error)
  })

  return data
}

module.exports = {
  save,
  findAll,
  findById,
  update,
  remove
}