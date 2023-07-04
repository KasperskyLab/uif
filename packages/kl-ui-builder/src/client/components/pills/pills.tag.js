const self = this

self.onItemClick = function (evt) {
  runtime.trigger('pills-click#' + opts.id, evt.item.mode)
  self.trigger('clicked', evt.item)
}
runtime.on('pills:select#' + opts.id, function (mode) {
  runtime.trigger('pills-click#' + opts.id, mode)
})
