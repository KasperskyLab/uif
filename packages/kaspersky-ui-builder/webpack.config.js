const webpack = require('webpack')

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './webpack-entry'),
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot/riot.js',
      $: 'jquery',
      _: 'lodash',
      key: 'keymaster',
      shortid: 'shortid',
      runtime: '@kaspersky/runtime/lib/instance',
      BoolField: 'BoolField',
      ButtonsListField: 'ButtonsListField',
      KeyValueListField: 'KeyValueListField',
      ValueListField: 'ValueListField',
      SelectField: 'SelectField',
      SelectPlatform: 'SelectPlatform',
      SearchField: 'SearchField',
      TextField: 'TextField',
      TextAreaField: 'TextAreaField',
      DependencyListField: 'DependencyListField',
      DependantsField: 'DependantsField',
      SimpleTextField: 'SimpleTextField',
      UIRenderTypeField: 'UIRenderTypeField',
      ValueField: 'ValueField',
      LocaleValueField: 'LocaleValueField',
      StyleField: 'StyleField',
      TableColumnListField: 'TableColumnListField',
      ListEditorActionsField: 'ListEditorActionsField',
      ListEditorElementsField: 'ListEditorElementsField',
      LinkButtonField: 'LinkButtonField',
      DataSourceField: 'DataSourceField',
      FormInitFunctionField: 'FormInitFunctionField',
      OptionalFunctionField: 'OptionalFunctionField',
      OptionalTextField: 'OptionalTextField',
      LockSourceField: 'LockSourceField',
      AccordionSourceField: 'AccordionSourceField',
      ControlGroupElementsField: 'ControlGroupElementsField',
      ValidationListField: 'ValidationListField',
      InnerFormField: 'InnerFormField',
      CheckboxField: 'CheckboxField',
      ToggledRuntimeMemberSearchField: 'ToggledRuntimeMemberSearchField',
      WizardStepsField: 'WizardStepsField',
      CustomLayoutField: 'CustomLayoutField',
      GridItemsListField: 'GridItemsListField',
      Markdown: 'Markdown',
      PropertyGroup: 'PropertyGroup',
      ControlSetup: 'ControlSetup',
      constants: 'constants',
      server: 'server'
    })
  ],
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'src/client/modules/constants.js'),
      BoolField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/bool-field.js'
      ),
      ButtonsListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/buttons-list-field.js'
      ),
      TableColumnListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/table-column-list-field.js'
      ),
      ListEditorActionsField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/list-editor-actions-field.js'
      ),
      ListEditorElementsField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/list-editor-elements-field.js'
      ),
      KeyValueListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/key-value-list-field.js'
      ),
      SelectField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/select-field.js'
      ),
      SelectPlatform: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/select-platform.js'
      ),
      SearchField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/search-field.js'
      ),
      TextField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/text-field.js'
      ),
      TextAreaField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/textarea-field.js'
      ),
      DependantsField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/dependants-field.js'
      ),
      DependencyListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/dependency-list-field.js'
      ),
      SimpleTextField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/simple-text-field.js'
      ),
      UIRenderTypeField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/ui-render-type-field.js'
      ),
      ValueField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/value-field.js'
      ),
      LocaleValueField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/locale-value-field.js'
      ),
      StyleField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/style-field.js'
      ),
      LinkButtonField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/link-button-field.js'
      ),
      DataSourceField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/data-source-field.js'
      ),
      FormInitFunctionField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/form-init-function-field.js'
      ),
      OptionalFunctionField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/optional-function-field.js'
      ),
      OptionalTextField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/optional-text-field.js'
      ),
      ValidationListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/validation-list-field.js'
      ),
      LockSourceField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/lock-source-field'
      ),
      AccordionSourceField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/accordion-source-field'
      ),
      ControlGroupElementsField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/control-group-elements-field'
      ),
      InnerFormField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/inner-form-field'
      ),
      CheckboxField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/checkbox-field'
      ),
      ToggledRuntimeMemberSearchField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/toggled-runtime-member-search-field'
      ),
      WizardStepsField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/wizard-steps-field'
      ),
      ValueListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/value-list-field'
      ),
      CustomLayoutField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/custom-layout-field'
      ),
      GridItemsListField: path.resolve(
        __dirname,
        'src/client/modules/control-settings-fields/grid-items-list-field'
      ),
      Markdown: path.resolve(__dirname, 'src/client/modules/property-sets/markdown-property-set'),
      PropertyGroup: path.resolve(__dirname, 'src/client/modules/property-sets/property-group'),
      ControlSetup: path.resolve(__dirname, 'src/client/modules/control-setup.js'),
      server: path.resolve(__dirname, 'src/client/services/server.js'),
      builder: path.resolve(__dirname, 'src/client/modules/control-settings-fields/builder.js'),
      helpers: path.resolve(__dirname, 'src/client/modules/property-sets/helpers.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [path.resolve(__dirname)],
        exclude: [path.resolve(__dirname, './node_modules')]
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        include: [path.resolve(__dirname)],
        exclude: [path.resolve(__dirname, './node_modules')]
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: [path.resolve(__dirname, './node_modules')]
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      },
      {
        test: /\.tag.js$/,
        use: [path.resolve(__dirname, './riot-tag-loader')],
        include: [
          path.resolve(__dirname, './src/client/components'),
          path.resolve(__dirname, './src/client/custom-settings'),
          path.resolve(__dirname, './src/client/custom-modules')
        ]
      },
      {
        test: /\.tag.html$/,
        use: [path.resolve(__dirname, './riot-tag-loader')],
        include: [
          path.resolve(__dirname, './src/client/components'),
          path.resolve(__dirname, './src/client/custom-settings'),
          path.resolve(__dirname, './src/client/custom-modules')
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(woff|eot|woff2|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[folder]/[name].[ext]',
          outputPath: '/css/fonts'
        }
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './lib/client/js'),
    filename: 'client.js'
  },
  devServer: {
    port: 2001
  }
}
