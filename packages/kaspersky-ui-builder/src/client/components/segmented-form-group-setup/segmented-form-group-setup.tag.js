const render = () => {
  const state = this.opts.setup.getState()
  if (!Object.keys(state).length) return
  const { elements: { items } } = state
  this.items = items
  if (!this.activeValue && this.items.length) {
    this.activeValue = this.items[0].value
  }
  this.update()
}

this.activeValue = ''

this.on('mount', () => {
  render()
  runtime.on('value:changed#' + this.opts.setup.id, render)
})

this.onTabClick = ({ target: { dataset: { value } } }) => {
  if (value) {
    this.activeValue = value
    this.update()
  }
}
