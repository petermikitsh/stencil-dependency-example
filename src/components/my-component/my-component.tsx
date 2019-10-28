import { Component, h } from '@stencil/core';
import { createStore, Store } from 'redux';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  store: Store;

  todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
      default:
        return state
    }
  }

  constructor() {
    this.store = createStore(this.todos, ['Use Redux']);

    this.store.dispatch({
      type: 'ADD_TODO',
      text: 'Read the docs'
    })
  }

  render() {
    return <div>{JSON.stringify(this.store.getState())}</div>;
  }
}
