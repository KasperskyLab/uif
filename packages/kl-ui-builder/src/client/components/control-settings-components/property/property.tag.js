const self = this
self.ignoreTitle = (opts.model.type === 'LockSourceField') || (opts.model.type === 'AccordionSourceField')
self.hideTitle = opts.model.noCaption || (!opts.model.outlineHeader && !opts.model.title) || self.ignoreTitle
self.setPropertyOffset = (opts.model.outlineHeader || opts.model.title) && !self.ignoreTitle
