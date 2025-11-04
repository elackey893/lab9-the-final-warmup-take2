import { test } from 'node:test';
import assert from 'node:assert';
import { TodoModel } from '../src/models/todo-model.js';

/**
 * Mock storage service for testing
 */
class MockStorage {
    constructor() {
        this.data = {};
    }

    save(key, value) {
        this.data[key] = value;
    }

    load(key, defaultValue) {
        return this.data[key] !== undefined ? this.data[key] : defaultValue;
    }

    remove(key) {
        delete this.data[key];
    }

    clear() {
        this.data = {};
    }
}

test('TodoModel - addTodo should add a new todo', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('Test todo');

    assert.strictEqual(model.todos.length, 1);
    assert.strictEqual(model.todos[0].text, 'Test todo');
    assert.strictEqual(model.todos[0].completed, false);
});

test('TodoModel - should not add empty todos', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('');
    model.addTodo('   ');

    assert.strictEqual(model.todos.length, 0);
});

test('TodoModel - toggleComplete should flip completion status', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('Test toggle');
    const todoId = model.todos[0].id;
    model.toggleComplete(todoId);

    assert.strictEqual(model.todos[0].completed, true);
    assert.strictEqual(storage.data.items[0].completed, true);  // Verifies save

    model.toggleComplete(todoId);
    assert.strictEqual(model.todos[0].completed, false);
});

test('TodoModel - deleteTodo should remove by ID', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('Keep this');
    model.addTodo('Delete this');
    const deleteId = model.todos[1].id;
    model.deleteTodo(deleteId);

    assert.strictEqual(model.todos.length, 1);
    assert.strictEqual(model.todos[0].text, 'Keep this');
    assert.strictEqual(storage.data.items.length, 1);
});

test('TodoModel - updateTodo should change text if valid', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('Old text');
    const todoId = model.todos[0].id;
    model.updateTodo(todoId, 'New text');

    assert.strictEqual(model.todos[0].text, 'New text');
    assert.strictEqual(storage.data.items[0].text, 'New text');
});

test('TodoModel - activeCount and completedCount should calculate correctly', () => {
    const storage = new MockStorage();
    const model = new TodoModel(storage);

    model.addTodo('Active');
    model.addTodo('Completed');
    model.toggleComplete(model.todos[1].id);

    assert.strictEqual(model.activeCount, 1);
    assert.strictEqual(model.completedCount, 1);
});

/* Expanded tests for better coverage—still room for clearCompleted/clearAll if needed. */