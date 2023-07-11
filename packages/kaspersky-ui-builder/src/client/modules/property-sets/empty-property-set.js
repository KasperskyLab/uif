function EmptyPropertySet () {
  const pSet = [
    new PropertyGroup([
      new SimpleTextField({
        label: 'Add a control to display data in this container.'
      })
    ])
  ]

  const api = {
    getMembers () {
      return pSet
    },
    render () {
      return {}
    }
  }

  return api
}

module.exports = EmptyPropertySet
