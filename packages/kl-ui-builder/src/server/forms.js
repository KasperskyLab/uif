const path = require('path')
const fs = require('fs')

const emitter = require('tiny-emitter/instance')

const moveToTrash = filePath => {
  if (fs.existsSync(filePath)) {
    const dirName = path.dirname(filePath)
    const fileName = path.basename(filePath)
    const trashFolder = path.join(dirName, 'trash')

    if (!fs.existsSync(trashFolder)) {
      fs.mkdirSync(trashFolder)
    }

    try {
      fs.copyFileSync(
        filePath,
        path.join(trashFolder, fileName)
      )
    } catch (err) {
      console.error(err)
    }

    fs.unlink(filePath, err => {
      if (err) throw err
    })
  }
}

const readForms = () => {
  const uiFilesFdr = process.env.formsFolderPath
  const res = {}
  if (!fs.existsSync(uiFilesFdr)) {
    return res
  }

  const files = fs.readdirSync(uiFilesFdr)
  for (let i = 0; i < files.length; i += 1) {
    const fileName = files[i]
    if (fileName.indexOf('.json') === -1) continue
    try {
      const parsedForm = JSON.parse(fs.readFileSync(path.join(uiFilesFdr, fileName), 'utf8'))
      res[parsedForm.id] = parsedForm
    } catch (err) {
      console.error(err)
    }
  }
  return res
}

const findForm = formId => {
  const uiFilesFdr = process.env.formsFolderPath
  if (!fs.existsSync(uiFilesFdr)) {
    return null
  }

  const files = fs.readdirSync(uiFilesFdr)
  try {
    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i]
      if (fileName.indexOf('.json') === -1) {
        continue
      }
      const parsedForm = JSON.parse(fs.readFileSync(path.join(uiFilesFdr, fileName), 'utf8'))
      if (parsedForm.id === formId) {
        return fileName
      }
    }
  } catch (err) {
    console.error(err)
  }
  return null
}

function attachToSocket (socket) {
  const uiFilesFdr = process.env.formsFolderPath

  function publishFormsList () {
    try {
      const parsedForms = readForms()
      socket.emit('set-forms', parsedForms)
    } catch (e) {
      console.error(e)
    }
  }

  socket.on('write-form', (formName, form) => {
    if (!fs.existsSync(uiFilesFdr)) {
      fs.mkdirSync(uiFilesFdr)
    }

    const newFormName = `${formName}.json`
    fs.writeFile(
      path.join(uiFilesFdr, newFormName),
      JSON.stringify(form, null, 2),
      err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`File ${newFormName} successfully saved`)
      }
    )
    emitter.emit('form:changed', formName, form)

    setTimeout(() => {
      const oldForm = findForm(form.id)
      if (oldForm && oldForm !== newFormName) {
        moveToTrash(path.join(uiFilesFdr, oldForm))
      }
    }, 3000)
  })

  socket.on('delete-form', (formId) => {
    const filePath = path.join(uiFilesFdr, `${formId}.json`)
    moveToTrash(filePath)
  })

  socket.on('get-forms', () => {
    publishFormsList()
  })
}

const api = {
  attachToSocket
}

module.exports = api
