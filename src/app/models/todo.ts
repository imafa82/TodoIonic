export class Todo{
    constructor(
        public description:string,
        public isImportant:boolean = false,
        public isDone:boolean = false
    ){}
    static clone(todo:Todo){
        return new Todo(todo.description, todo.isImportant, todo.isDone);
    }
}