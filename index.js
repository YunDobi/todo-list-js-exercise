// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    completeTask: function() {
      task.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? "": "not"} completed`);
    }

  }
  
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);

task1.title
task1.completeTask();
