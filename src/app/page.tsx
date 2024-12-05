// import Counter from '@/components/Counter';
// import Minus from '@/components/Minus';
// import Plus from '@/components/Plus';
'use client';
import TodoList from '@/components/todo/TodoList';
import TodoPoster from '@/components/todo/TodoPoster';

const page = () => {
  return (
    <>
      {/* <Counter />
      <Minus />
          <Plus />
           */}
      <TodoList />
      <TodoPoster />
    </>
  );
};

export default page;
