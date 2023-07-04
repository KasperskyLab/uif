# Domains

Domains are designed to encapsulate the logic of working on any scope in a separate container. With their help, you can organize a very effective mechanism for working with logical blocks of the application. They are a kind of mini-runtime. They have the following properties, completely identical in behavior runtime:
- property `variable`
- methods `on`, `off`, `triger`

The main functionality of domains is to combine changes into one common scope. For example: in UI Builder you can create multiple forms by specifying the same domain for them. Further, during the operation of the application, when opening and editing these forms, the changes will be saved in the domain. When the time comes to save, all changes related to this domain can be obtained in a special function-the save handler.

In order to bind a function to domain preservation, you need to use its method `onSave`, by assigning its function to it

```javascript
// create domain
let domain = runtime.domain.create('myDomain')
// register on save callback
domain.onSave = function (changes, scopedChages) {
// on save logic
}
```
2 parameters will be passed to this function, `changes` and `scopedChages`.
Both parameters contain the implemented changes in the form __key:value__, where the key is the form ID, and the value is its current context. It is in this function that you will need to organize the saving of changes using the methods of the Open API or the methods of the plugin server. For example, if changes made in plugin forms are saved, the server method will need to be called here `setformModel` from plugins.

> _Important!__
The handler function should return `Promise`. Only after this Promise is resolved, the action-bar will be hidden. The result with which the Promise ended signals whether all changes have been successfully saved. I.e.`Promise.resolve` means that all changes have been saved and you can hide the action-bar. 

If at the time of saving the change through the action-bar, there were several domains with changes, the action-bar will be hidden only after all the handler functions of these domains are called.

The difference between the two parameters is that in `scopedChages` contains changes related to plugins. The key in this object is the name of the plugin. In the value there is an object with the same structure __key:value__, which was revealed above. Thus, when processing, for example, saving the policy domain, we will get our changes separately and plugin changes separately.

The big advantage of domains is that they allow you to easily edit forms in any section of the application, without forcing the user to save their changes before going to another section, and then save all the changes at a time.

> _Important!__
Domains must be registered in stores to guarantee their existence at the time of opening the form

Domains can be destroyed, so they are very suitable for use in scopes with a limited life cycle. For example, you can create a `policy` domain that processes policies, create some variables in it, subscribe to events, trigger events, etc., and then destroy the domain when all the work related to policies is finished. Thus, we get an effective mechanism to prevent memory leaks. Domains are not destroyed by the application, so you will need to do the destruction of the domain yourself.