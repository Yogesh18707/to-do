// interface Task {
//     id: number;
//     text: string;
//     completed: boolean;
// }
//
// let tasks: Task[] = [];
// let taskId = 0;
//
// const taskInput = document.getElementById('taskInput') as HTMLInputElement;
// const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
// const taskList = document.getElementById('taskList') as HTMLUListElement;
//
// function renderTasks(): void {
//     taskList.innerHTML = '';
//     tasks.forEach(task => {
//         const li = document.createElement('li');
//         li.className = task.completed ? 'completed' : '';
//         li.innerHTML = `
//       <input type="checkbox" ${task.completed ? 'checked' : ''} />
//       <span>${task.text}</span>
//       <button>Delete</button>
//     `;
//
//         const checkbox = li.querySelector('input') as HTMLInputElement;
//         const deleteBtn = li.querySelector('button') as HTMLButtonElement;
//
//         checkbox.addEventListener('change', () => toggleTask(task.id));
//         deleteBtn.addEventListener('click', () => deleteTask(task.id));
//
//         taskList.appendChild(li);
//     });
// }
//
// function addTask(text: string): void {
//     if (text.trim() === '') return;
//     const newTask: Task = {
//         id: taskId++,
//         text,
//         completed: false
//     };
//     tasks.push(newTask);
//     renderTasks();
//     taskInput.value = '';
// }
//
// function toggleTask(id: number): void {
//     tasks = tasks.map(task =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//     );
//     renderTasks();
// }
//
// function deleteTask(id: number): void {
//     tasks = tasks.filter(task => task.id !== id);
//     renderTasks();
// }
//
// addBtn.addEventListener('click', () => addTask(taskInput.value));
