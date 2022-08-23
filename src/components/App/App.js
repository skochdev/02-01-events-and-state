import { Box } from '../Box';
import { Counter } from '../Counter';
import { DropDownMenu } from '../DropDownMenu';
import { colorPickerOptions } from 'colors';
import ColorPicker from '../ColorPicker/ColorPicker';
import { TodoList } from '../TodoList';
import { Component } from 'react';
import initialTodos from 'todos.json';
import { Form } from '../Form';

class App extends Component {
  state = {
    todos: initialTodos,
    submittedFormData: {},
  };

  removeTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(t => t.id !== todoId),
    }));
  };

  handleSubmittedForm = ({ name, surname }) => {
    this.setState({
      submittedFormData: { name, surname },
    });
  };

  render() {
    const { removeTodo, handleSubmittedForm } = this;
    const { todos, submittedFormData } = this.state;
    const totalTodos = todos.length;
    const completedTodos = todos.reduce(
      (totalCompleted, todo) =>
        todo.isCompleted ? totalCompleted + 1 : totalCompleted,
      0
    );

    return (
      <Box as="main" display="flex" flexDirection="column" alignItems="center">
        <Box as="section" bg="white" px={4} py={4}>
          <Counter />
        </Box>
        <Box as="section" bg="white" px={4} py={4}>
          <DropDownMenu />
        </Box>
        <Box as="section" px={4} py={4}>
          <ColorPicker options={colorPickerOptions} />
        </Box>
        <Box as="section" px={4} py={4}>
          {totalTodos > 0 ? (
            <TodoList
              data={todos}
              onRemoveTodo={removeTodo}
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
          ) : (
            <p>No todos </p>
          )}
        </Box>
        <Box>
          <Form onFormSubmit={handleSubmittedForm} />
          {submittedFormData && (
            <div>
              <p>Name submitted: {submittedFormData.name}</p>
              <p>Surname submitted: {submittedFormData.surname}</p>
            </div>
          )}
        </Box>
      </Box>
    );
  }
}

export default App;
