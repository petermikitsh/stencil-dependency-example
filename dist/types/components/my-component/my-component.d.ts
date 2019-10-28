import { Store } from 'redux';
export declare class MyComponent {
    store: Store;
    todos: (state: any[], action: any) => any[];
    constructor();
    render(): any;
}
