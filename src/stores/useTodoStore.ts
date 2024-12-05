import { create } from 'zustand';

export const useTodoStore = create<ITodoStore>((set) => ({
  data: [],
  addTodo: (value) =>
    set((state) => ({ data: [...state.data, { id: Date.now(), title: value.title }] })),
  deleteTodo: (id) => set((state) => ({ data: state.data.filter((el) => el.id !== id) })),
  updateTodo: (id, newData) => {
    set((state) => ({
      data: state.data.map((el) => (el.id === id ? { ...el, title: newData } : el)),
    }));
  },
}));
