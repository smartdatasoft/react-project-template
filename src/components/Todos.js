import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

//import css app.css

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
