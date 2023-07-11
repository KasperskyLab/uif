function Popup () {
  function showPopup (content, opts) {
    $(document.body).append(content)
    opts = opts || {}
    opts.name = name
    riot.mount('popup', opts)
  }

  runtime.on('show-popup', showPopup)
  const api = {

    showPopup: showPopup

  }

  return api
}

const popup = new Popup()
runtime.member('popupService', popup).join()
