import React from 'react';
import { List, Input } from 'antd';

const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['python', 'React', 'Djnago'],
    current: '',
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value,
    });
  };

  onKeyDown = (e) => {
    // Enter key
    if (e.keyCode == 13) {
      const { todoList, current } = this.state;
      if (current.trim().length > 0) {
        this.setState({ current: '', todoList: [...todoList, current.trim()] });
      }
    }
  };

  render() {
    return (
      <div style={{ width: '300px', margin: '30px auto' }}>
        <List
          header={'Todo List'}
          dataSource={this.state.todoList}
          bordered={true}
          renderItem={(todo) => <List.Item>{todo}</List.Item>}
          style={{ marginBottom: '6px' }}
        />

        <Input
          type="text"
          value={this.state.current}
          placeholder="추가 목록 입력"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <hr />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default TodoList;
