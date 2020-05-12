class ClassTodoModel {
    constructor() {
        this.todos = [];
        this.lastChange = null;
    }

    addToPrivateList() {
        console.log("addToPrivateList");
    }
    add() { console.log("add"); }
    reload() { }
}
//all members, fields and methods of class object are public
var classModel = new ClassTodoModel();
console.log(classModel.todos)//[]
console.log(classModel.add);//[Function:add]
//= no encapsulation - sercuity issue
//if class methods called as a callback, this referes to DOM element, not object
//btn.click(todoModel.reload)//this = btn
// need to pass fxn to make it work: btn.click(()=>todoModel.reload())

function TodoModel() {
    var todos = [];
    var lastChange = null;

    function addToPrivateList() {
        console.log('add to private list');
    }
    function add() { console.log('add') }
    function reload() { }
    //return{todoList: ()=>console.log(todos)}
    return Object.freeze({ add, reload })
}
var factoryModel = TodoModel();
console.log(factoryModel.add);//[Fucntion:add]
console.log(factoryModel.todos);//undefined
console.log(factoryModel.addToPrivateList)//undefined
//doesn't use this = less bugs