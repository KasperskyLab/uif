const self = this

self.valid = true
self.onValueChange = function () {
  self.trigger('value-changed')
}

self.serializeState = function () {
  return {
    input: self.refs.area.value
  }
}

self.on('mount', function () {
  // opts.valid contains result of prop validation during form validation
  if (opts.valid != null) { self.valid = opts.valid }
  self.validate()
})

self.getValue = function () {
  return self.refs.area.value
}

self.validate = function () {
  if (!self.opts.required) return true
  self.valid = self.refs.area.value !== ''
  self.update()
  return self.valid
}

// var self        = this;
// var editor
// var beautify_js = require( 'js-beautify' ).js_beautify
// var CodeMirror  = require( 'codemirror' )
// var js          = require( '../../node_modules/codemirror/mode/javascript/javascript' )
// var esprima     = require( 'esprima' )
// var jsonlint    = require( 'json-lint' )
// self.errors     = []
//
// CodeMirror.defineExtension( "autoFormatRange", function ( from, to ) {
//    var cm   = this;
//    var text = cm.getRange( from, to );
//    var out  = beautify_js( text, { indent_size: 2 } );
//
//    cm.operation( function () {
//        cm.replaceRange( out, from, to );
//    } );
// } );
//
// self.on( 'mount', function () {
//    editor = CodeMirror.fromTextArea( self.refs.area, {
//        lineNumbers:     true,
//        styleActiveLine: true,
//        matchBrackets:   true,
//        mode:            {
//            name: "javascript",
//            json: true
//        }
//    } );
//
//    editor.on( "blur", autoFormatRange );
//    editor.on( "blur", parseCode );
//    blurSubscriptions.forEach( function ( cb ) {
//        editor.on( "blur", cb );
//    } )
//
//    editor.on( "change", onCodeChange );
//
//    function autoFormatRange () {
//        var totalLines = editor.lineCount();
//        editor.autoFormatRange( { line: 0, ch: 0 }, { line: totalLines } );
//    }
//
//    var totalLines = editor.lineCount();
//    editor.autoFormatRange( { line: 0, ch: 0 }, { line: 1 } );
// } )
// var timer
// function onCodeChange () {
//    if ( !timer ) {
//        setChangeTimeout()
//    } else {
//        clearTimeout( timer )
//        setChangeTimeout()
//    }
// }
//
// function setChangeTimeout () {
//    timer = window.setTimeout( function () {
//        parseCode()
//    }, 1000 );
// }
//
// function publishBlurEvent () {
//    self.trigger( 'blur' )
// }
//
// self.getValue = function () {
//    return editor.getValue()
// }
//
// self.setValue = function ( val ) {
//    self.refs.area.value = val
//    editor.getDoc().setValue( val )
//    var totalLines = editor.lineCount();
//    editor.autoFormatRange( { line: 0, ch: 0 }, { line: totalLines } );
// }
//
// self.refresh          = function () {
//    if ( editor )
//        editor.refresh();
// }
// var blurSubscriptions = []
// self.onBlur           = function ( cb ) {
//    if ( !editor ) {
//        blurSubscriptions.push( cb )
//    }
//    else editor.on( "blur", cb );
// }
//
// var parseCode;
// function parseJSCode () {
//    var val = editor.getValue()
//    if ( codePatchFunction ) val = codePatchFunction( val )
//
//    try {
//        self.errors      = []
//        self.parseResult = esprima.parse( val, { tolerant: true, loc: true } )
//        if ( self.parseResult.errors.length ) {
//            self.parseResult.errors.forEach( function ( error ) {
//                self.errors.push( 'Line ' + error.lineNumber + ': ' + error.description )
//            } )
//        }
//        publishBlurEvent()
//        self.update()
//    } catch ( ex ) {
//        self.errors.push( ex.toString() )
//        self.update()
//    }
// }
//
// function parseJSONCode () {
//    var val = editor.getValue()
//    if ( codePatchFunction ) val = codePatchFunction( val )
//
//    self.errors = []
//    var lint    = jsonlint( val );
//    if ( lint.error ) {
//        lint.error // Error Message
//        lint.line; // Line number in json file where error was found
//        lint.character; // Character of line in json file where error was found
//        self.errors.push( 'Line ' + lint.line + ', character: "' + lint.character + '": ' + lint.error )
//
//    } else {
//        self.parseResult = JSON.parse( val );
//        publishBlurEvent()
//    }
//    self.update()
// }
//
// runtime.on( 'getCode', function ( cb ) {
//    parseCode()
//    cb( self.parseResult )
// } )
//
// self.getCode = function ( cb ) {
//    parseCode()
//    return self.parseResult
// }
//
// self.getParseResult = function () {
//    return self.parseResult
// }
//
// self.getRawCode = function ( cb ) {
//    return editor.getValue()
// }
//
// self.setValidationType    = function ( vType ) {
//    if ( vType == 'js' ) {
//        parseCode = parseJSCode
//    } else {
//        parseCode = parseJSONCode
//    }
// }
// var codePatchFunction
// self.setCodePatchFunction = function ( fnc ) {
//    codePatchFunction = fnc
// }
