export default class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(text) {
      if (!text || text.trim() === '') {
        throw new Error('Task text cannot be empty');
      }
      this.tasks.push({ text, completed: false });
    }
  
    getTasks() {
      return this.tasks;
    }
  }
  