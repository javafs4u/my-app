
export class ToDoService {
    myToDos: Array<{ id: number, task: string }> = [{ id: 0, task: 'Go to Bank' }];
    taskId = 1;


    addTask(task) {
        this.myToDos.push({ id: this.taskId++, task: task });
    }

    deleteTask(id) {
        console.log('Deleting id: ', id);
        console.log('myToDos: ', this.myToDos);
        let index = this.myToDos.findIndex(element => element.id === id);
        this.myToDos.splice(index, 1);
    }

}