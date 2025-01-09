Feature: Todo List Management
  As a user, I want to manage my todo list so that I can organize my tasks.

  Scenario: Add a new task
    Given the todo list is empty
    When I add a task with the text "Buy milk"
    Then the list should contain 1 task
    And the task should be "Buy milk"
    And the task should not be completed
