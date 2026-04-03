const ReactDOM = require('react-dom')

module.exports = {
  createRoot(container) {
    return {
      render(element) {
        ReactDOM.render(element, container)
      },
      unmount() {
        ReactDOM.unmountComponentAtNode(container)
      }
    }
  }
}
