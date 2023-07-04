function Server () {
  function createForm (form, childElementId) {
    return new Promise(function (resolve, reject) {
      const data = {
        name: form.state.name.input,
        draft: JSON.stringify(form),
        childForm: childElementId
      }

      $.ajax({
        type: 'POST',
        url: '/projects/' + activeProjectName + '/uis',
        data: data,
        dataType: 'json'
      }).done(resolve)
    })
  }

  function updateForm (record, form, childElementId) {
    return new Promise(function (resolve, reject) {
      const data = {
        uiId: record._id,
        name: form.state.name.input,
        json: '',
        draft: JSON.stringify(form),
        childForm: childElementId
      }

      $.ajax({
        type: 'PUT',
        url: '/projects/' + activeProjectName + '/uis',
        data: data,
        dataType: 'json'
      }).done(resolve)
    })
  }

  function getForm (formId) {
    // 57cf05bdf9e444ee02f72473
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: '/projects/' + activeProjectName + '/uis/' + formId,
        dataType: 'json'
      }).done(function (res) {
        resolve(res)
      }).fail(function (res) {
        reject()
      })
    })
  }

  function getForms () {
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: '/projects/' + activeProjectName + '/uis',
        dataType: 'json'
      }).done(function (res) {
        resolve(res)
      }).fail(function (res) {
        reject()
      })
    })
  }

  function deleteForm (formId) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'DELETE',
        url: '/projects/' + activeProjectName + '/uis/' + formId
      }).done(function (res) {
        resolve(res)
      }).fail(function (res) {
        reject()
      })
    })
  }

  return {
    createForm: createForm,
    updateForm: updateForm,
    deleteForm: deleteForm,
    getForm: getForm,
    getForms: getForms
  }
}

module.exports = new Server()
