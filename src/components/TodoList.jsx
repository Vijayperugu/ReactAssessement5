import React ,{useState} from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <div className="list-container">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="todo-input"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
      />
    </div>
  );
}

export default TodoList