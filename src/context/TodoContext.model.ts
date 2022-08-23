export interface ITodo {title: string, status: string}

export interface ITodoData {
    filters: {
        search: string,
        status: string
    }
    todoList: ITodo[]
}

export interface ITodoContext {
    updateTodo: (title: string, todoUpdate: ITodo) => void,
    addTodo: (newTodo: ITodo) => void,
    deleteTodo: (title: string) => void,
    changeFilter: ({ field, value }: { field: string; value: string }) => void,
    getTodoList: () => ITodo[]
}