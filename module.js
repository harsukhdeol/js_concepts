//Module - reusable code that encapsulates implementation details and exposes a public API that can be use by other code


/* Namespace - local dictionary of names that are defined in each block
        - so each object has a unique name 
Scope - chain of namespaces */


//Module patterns in ES5 + earlier
//IIFE - encapsulate code so we don't have to understand what it does & define vars inside so the don't pollute global scope
//Revealing Module Pattern

// Expose module as global variable
var singleton = function () {

    // Inner logic
    function sayHello() {
        console.log('Hello');
    }

    // Expose API
    return {
        sayHello: sayHello
    }
}()

//singleton - can only have single instance
singleton.sayHello()//returns Hello

// Expose module as global variable
var Module = function () {

    // Inner logic
    function sayHello() {
        console.log('Hello');
    }

    // Expose API
    return {
        sayHello: sayHello
    }
}

var module = new Module();
module.sayHello()// returns Hello

//Module formats

//Asynchronous Module Definition (AMD) - browsers-  uses define 

//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () { };
});

//CommonJS - node.js - uses require and module.exports
var dep1 = require('./dep1');
var dep2 = require('./dep2');

module.exports = function () {
    // ...
}

    //Universal Module Definition (UMD) - used in browser and node
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['b'], factory);
        } else if (typeof module === 'object' && module.exports) {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory(require('b'));
        } else {
            // Browser globals (root is window)
            root.returnExports = factory(root.b);
        }
    }(this, function (b) {
        //use b 

        // Just return a value to define the module export.
        // This example returns an object, but the module
        // can return a function as the exported value.
        return {};
    }));

//System.register - support ES6 module syntax in ES5
import { p as q } from './dep';

var s = 'local';

export function func() {
    return q;
}

export class C {

}
//ES6 module format - import and export

export function sayHello() {
    console.log('Hello');
}
export default function sayHello() {
    console.log('Hello');
}

import { sayHello } from './lib';//importing non-default fxn
import sayHello from './lib';//importing default fxn

import { sayHello as say } from './lib';
import * as lib from './lib';

/*module loader-interprets and loads a module
written in a certain module format at runtime
- RequireJS and SystemJS.

module bundler replaces a module loader and generates
 a bundle of all code at build time
 - Browserify and Webpack. */