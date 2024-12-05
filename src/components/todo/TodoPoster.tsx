'use client';
import { useTodoStore } from '@/stores/useTodoStore';
import scss from './TodoPoster.module.scss';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const TodoPoster = () => {
  const { register, handleSubmit, setValue, reset } = useForm<ITodo>();
  const [editId, setEditId] = useState<number | null>(null);
  const { data, deleteTodo, updateTodo } = useTodoStore();

  const onEdit = (id: number, title: string) => {
    setEditId(id);
    setValue('title', title);
    reset();
  };

  const onSave = (formData: ITodo) => {
    if (editId !== null) {
      updateTodo(editId, formData.title);
      setEditId(null);
      reset();
    }
  };

  return (
    <div className={scss.TodoPoster}>
      <div className="container">
        <center>
          <div className={scss.content}>
            {data.map((el) => (
              <div key={el.id} className={scss.poster}>
                <h2>{el.title}</h2>
                <form onSubmit={handleSubmit(onSave)}>
                  <input
                    type="text"
                    placeholder="Edit..."
                    {...register('title', { required: true })}
                  />
                  <div className={scss.btn}>
                    <button
                      className={scss.deleteBtn}
                      type="button"
                      onClick={() => deleteTodo(el.id)} 
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className={scss.editBtn}
                      onClick={() => onEdit(el.id, el.title)}
                    >
                      Edit
                    </button>
                    {editId === el.id && (
                      <button type="submit" className={scss.saveBtn}>
                        Save
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ))}
          </div>
        </center>
      </div>
    </div>
  );
};

export default TodoPoster;
