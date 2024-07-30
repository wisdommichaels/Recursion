//import event module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connection',function(){
    console.log("hello connection")
});
// count the number of listener to this event
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
