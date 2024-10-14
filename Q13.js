let tasks = ["Submit report", "Reply to emails", "Team meeting", "Update project plan", "Call client"];

for (let i = 0; i < tasks.length - 1; i++) {
  tasks[i] = tasks[i + 1];
}
tasks.length--;

tasks.length = tasks.length + 2;
for (let i = tasks.length - 1; i >= 2; i--) {
  tasks[i] = tasks[i - 2];
}
tasks[0] = "Finish documentation";
tasks[1] = "Prepare presentation";

tasks[tasks.length - 1] = "Schedule client meeting";

console.log("Updated task list: ", tasks);
