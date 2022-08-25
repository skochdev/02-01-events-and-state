import { Box } from '../Box';
import { Component } from 'react';

export class TodoAdder extends Component {
  state = {
    newTodoText: '',
  };

  onNewTodoChange = e => {
    this.setState({ newTodoText: e.currentTarget.value });
  };

  handleSubmitNewTodo = e => {
    e.preventDefault();
    this.props.onSubmitNewTodo(this.state.newTodoText);
    this.resetState();
  };

  resetState = () => {
    this.setState({ newTodoText: '' });
  };

  render() {
    const { handleSubmitNewTodo, onNewTodoChange } = this;
    return (
      <Box display="flex" justifyContent="center">
        <form onSubmit={handleSubmitNewTodo}>
          <label>
            <textarea
              required
              onChange={onNewTodoChange}
              value={this.state.newTodoText}></textarea>
          </label>
          <Box type="submit" as="button" display="block" mx="auto">
            Add todo
          </Box>
        </form>
      </Box>
    );
  }
}
