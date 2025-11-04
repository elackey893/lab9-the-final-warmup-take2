/**
 * TodoModel - Manages the todo list data and business logic
 * Implements the Observer pattern for reactive updates
 */
export class TodoModel {
    /**
     * Creates a new TodoModel instance.
     * @param {StorageService} storageService - The storage service for persistence.
     */
    constructor(storageService) {
        this.storageService = storageService;
        this.todos = this.storageService.load('items', []);
        this.listeners = [];
        this.nextId = this.storageService.load('nextId', 1);
    }

    /**
     * Subscribe to model changes.
     * @param {Function} listener - The callback to invoke on changes.
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    /**
     * Notify all subscribers of changes.
     */
    notify() {
        this.listeners.forEach(listener => listener());
    }

    /**
     * Add a new todo item.
     * @param {string} text - The text for the new todo.
     */
    addTodo(text) {
        if (!text || text.trim() === '') {
            return;
        }

        const todo = {
            id: this.nextId++,
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.push(todo);
        this.save();
        this.notify();
    }

    /**
     * Toggle the completion status of a todo.
     * @param {number} id - The ID of the todo to toggle.
     */
    toggleComplete(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.notify();
        }
    }

    /**
     * Update the text of a todo.
     * @param {number} id - The ID of the todo to update.
     * @param {string} newText - The new text for the todo.
     */
    updateTodo(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo && newText && newText.trim() !== '') {
            todo.text = newText.trim();
            this.save();
            this.notify();
        }
    }

    /**
     * Delete a todo item.
     * @param {number} id - The ID of the todo to delete.
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
        this.notify();
    }

    /**
     * Clear all completed todos.
     */
    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.save();
        this.notify();
    }

    /**
     * Clear all todos.
     */
    clearAll() {
        this.todos = [];
        this.save();
        this.notify();
    }

    /**
     * Get the count of active (incomplete) todos.
     * @returns {number} The number of active todos.
     */
    get activeCount() {
        return this.todos.filter(t => !t.completed).length;
    }

    /**
     * Get the count of completed todos.
     * @returns {number} The number of completed todos.
     */
    get completedCount() {
        return this.todos.filter(t => t.completed).length;
    }

    /**
     * Save todos and nextId to storage.
     */
    save() {
        this.storageService.save('items', this.todos);
        this.storageService.save('nextId', this.nextId);
    }
}