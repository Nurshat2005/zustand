interface ITodo {
  id: number;
  title: string;
}
interface ITodoStore {
  data: ITodo[];
  addTodo: (value: ITodo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newData: string) => void;
}
