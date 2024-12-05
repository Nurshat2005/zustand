'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import scss from './TodoList.module.scss';
import { useTodoStore } from '@/stores/useTodoStore';

const TodoList = () => {
  const { register, handleSubmit, reset } = useForm<ITodo>();
  const { addTodo } = useTodoStore();
  const onSubmit: SubmitHandler<ITodo> = (data) => {
    addTodo(data);
    reset();
  };

  return (
    <div className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Введите задачу"
              {...register('title', { required: true })}
              className={scss.input}
            />
            <button type="submit" className={scss.button}>
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
