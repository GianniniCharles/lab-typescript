// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

//Setting input/output. Input is string, output is number.

//put VOID if the function doesn't return anything.
export interface TaskInterface {
 
myArray: Array<string>
 
addTask(task:string):void;

listAllTasks():void;

deleteTask(task:string):void;
}