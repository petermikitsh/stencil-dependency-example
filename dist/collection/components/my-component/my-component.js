import { h } from "@stencil/core";
import { createStore } from 'redux';
export class MyComponent {
    constructor() {
        this.todos = (state = [], action) => {
            switch (action.type) {
                case 'ADD_TODO':
                    return state.concat([action.text]);
                default:
                    return state;
            }
        };
        this.store = createStore(this.todos, ['Use Redux']);
        this.store.dispatch({
            type: 'ADD_TODO',
            text: 'Read the docs'
        });
    }
    render() {
        return h("div", null, JSON.stringify(this.store.getState()));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
}
