import React from 'react';
import { List, Input } from 'antd';
import { produce } from 'immer';

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
    if (e.keyCode === 13) {
      this.setState(
        produce((draft) => {
          const current = draft.current.trim();
          if (current.length > 0) {
            draft.todoList.push(current);
            draft.current = '';
          }
        }),
      );
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
