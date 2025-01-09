import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import TodoList from '../../src/todo.js';

let todo;

Given('the todo list is empty', function () {
  todo = new TodoList();
});

When('I add a task with the text {string}', function (taskText) {
  todo.addTask(taskText);
});

Then('the list should contain {int} task(s)', function (taskCount) {
  expect(todo.getTasks()).to.have.lengthOf(taskCount);
});

Then('the task should be {string}', function (taskText) {
  const task = todo.getTasks()[0];
  expect(task.text).to.equal(taskText);
});

Then('the task should not be completed', function () {
  const task = todo.getTasks()[0];
  expect(task.completed).to.be.false;
});
