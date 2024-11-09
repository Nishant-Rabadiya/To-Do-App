// const nameLogo = document.getElementById('nameLogo');
// const greet = document.getElementById('greet');
// const listItem = document.getElementById('listItem');
// const addListInput = document.getElementById('addListInput');
// const addedList = document.getElementById('addedList');
// const progressList = document.getElementById('progressList');
// const modelList = document.getElementById('modelList');

// const selectedDate = document.getElementById('selectedDate');
// const addTaskValue = document.getElementById('addTaskValue');
// const displayTask = document.getElementById('displayTask');
// const addTaskDateError = document.getElementById('addTaskDateError');
// const taskError = document.getElementById('taskError');


// const TODOData = JSON.parse(localStorage.getItem('TODOData')) || [];
// let loginData = JSON.parse(localStorage.getItem('loginData'));

// let CurrUser = TODOData.find(email => email.email === loginData.email);
// console.log(CurrUser);

// const todoList = JSON.parse(localStorage.getItem('todoList')) || [];


// const convertDateTimeToDDMMYYYY = (time) => {
//   var d = new Date(time);
//   return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
// }

// // Start Name logo and bacagroundColor *************************
// nameLogo.innerHTML = CurrUser.firstName.charAt(0).toUpperCase() + CurrUser.lastName.charAt(0).toUpperCase();
// nameLogo.style.backgroundColor = getRandomColor();
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// // End Name logo and bacagroundColor *************************
// // Start Greetings *************************
// let greetings = () => {
//   let date = new Date();
//   let hour = date.getHours();
//   if (hour < 12) {
//     greet.innerHTML = "Good morning🌄," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else if (hour < 18) {
//     greet.innerHTML = "Good afternoon🌤️," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else if (hour < 21) {
//     greet.innerHTML = "Good evening🌆," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else {
//     greet.innerHTML = "Good night🌉," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   }
// }
// greetings();
// // End Greetings *************************

// // Start calender section *************************
// document.addEventListener("DOMContentLoaded", function () {
//   const calendarWrapper = document.getElementById("calendarWrapper");
//   const prevMonthBtn = document.getElementById("prevMonthBtn");
//   const nextMonthBtn = document.getElementById("nextMonthBtn");
//   const calenderMonth = document.getElementById("calenderMonth");

//   // Function to generate calendar content for a given month and year
//   function generateCalendar(year, month) {
//     const startDate = new Date(year, month, 1);
//     // console.log(startDate);
//     const endDate = new Date(year, month + 1, 0);
//     // console.log(new Date(year, month + 1, 0));
//     // console.log(endDate);
//     const currentDate = new Date();
//     // let calendarHTML = `<div class="calendar-month">${startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>`;
//     let calendarHTML = `<div></div>`;
//     calenderMonth.innerHTML = `<div>${startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>`;
//     let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


//     // Calculate the number of blank days at the beginning of the month
//     //   const startDayOfWeek = startDate.getDay();
//     //   for (let i = 0; i < startDayOfWeek; i++) {
//     //     calendarHTML += `<div class="calendar-day"></div>`;
//     //   }

//     // Generate calendar dates
//     //   for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
//     //     calendarHTML += `<div class="calendar-day">${date.getDate()} ${dayNames[date.getDay()]}</div>`;
//     //   }

//     for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
//       let classes = "calendar-day";
//       if (date.getMonth() !== month) {
//         classes += " other-month";
//       }
//       if (date.toDateString() === currentDate.toDateString()) {
//         classes += " current-date";
//       }
//       if (date < currentDate) {
//         classes += " past-date";
//       }
//       calendarHTML += `<div><button class="${classes}" onclick = dates(this)>${date.getDate()} ${dayNames[date.getDay()]}</button></div>`;

//     }

//     return calendarHTML;
//   }

//   // Initial load of current month's calendar
//   const currentDate = new Date();
//   calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

//   // Previous month button click event
//   prevMonthBtn.addEventListener("click", function () {
//     const currentMonth = currentDate.getMonth();
//     currentDate.setMonth(currentMonth - 1);
//     calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
//   });

//   // Next month button click event
//   nextMonthBtn.addEventListener("click", function () {
//     const currentMonth = currentDate.getMonth();
//     currentDate.setMonth(currentMonth + 1);
//     calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
//   });
// });


// // function displayTasks() {
// //   var taskList = document.getElementById('taskList');
// //   taskList.innerHTML = '';
// //   var existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
// //   // Sort tasks by date
// //   existingTasks.sort((a, b) => {
// //       return new Date(a.date) - new Date(b.date);
// //   });
// //   existingTasks.forEach(task => {
// //       var taskDiv = document.createElement('div');
// //       taskDiv.className = 'task';
// //       // Convert task date to a JavaScript Date object
// //       var taskDate = new Date(task.date);
// //       var today = new Date();
// //       var yesterday = new Date(today);
// //       yesterday.setDate(today.getDate() - 1);
// //       var tomorrow = new Date(today);
// //       tomorrow.setDate(today.getDate() + 1);
// //       var dateString;
// //       // Check if the task is for today, yesterday, or tomorrow
// //       if (taskDate.toDateString() === today.toDateString()) {
// //           dateString = 'Today';
// //       } else if (taskDate.toDateString() === yesterday.toDateString()) {
// //           dateString = 'Yesterday';
// //       } else if (taskDate.toDateString() === tomorrow.toDateString()) {
// //           dateString = 'Tomorrow';
// //       } else {
// //           dateString = taskDate.toDateString(); // Display full date for other days
// //       }
// //       taskDiv.innerHTML = `<h3>${dateString}</h3>`;
// //       task.task.forEach(subTask => {
// //           taskDiv.innerHTML += `<p>${subTask}</p>`;
// //       });
// //       taskList.appendChild(taskDiv);
// //   });
// // }
// // // Display tasks when the page loads
// // displayTasks();



// // End calender section *************************
// // Start add list functionality *************************
// const listError = document.getElementById('listError');

// let listData;
// let addList = () => {

//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let currUserList = todoList.filter(x => x.userId === CurrUser.id);
//   console.log(currUserList);  
//   console.log(addListInput.value);

//   if (currUserList.find(x => x.listName.toLowerCase() === addListInput.value.toLowerCase())) {
//     console.log("not valid");
//     listError.innerHTML = 'List name is already exist!'
//     return
//   } else { 
//     console.log('valid');
//     if (addListInput.value.trim()) {
//       addedList.innerHTML = `
//               <div class="added-list">
//                   <p class="added-list-name" id="listName">${addListInput.value}<button class="added-list-remove-btn" ><i
//                               class="fa-solid fa-xmark" onclick='addListRemove(this)'></i></button></p>
//               </div>
//     `
//       listData = []
//       listData.push(addListInput.value)
//       addListInput.value = '';
//     } else {
//       console.log('Not valid');
//       addListInput.value = '';
//     }
//     listError.innerHTML = ''
//   }

// }

// let addListRemove = (e) => {
//   e.parentElement.parentElement.parentElement.remove();
// }
// // End add list functionality *************************

// let addTask = () => {
//   let isFlag = false;
//   if (!selectedDate.value) {
//     addTaskDateError.innerHTML = 'Please select date!'
//     isFlag = true;
//   } else {
//     addTaskDateError.innerHTML = ''
//   }
//   if (!addTaskValue.value) {
//     taskError.innerHTML = 'Please add task!'
//     isFlag = true;
//   } else {
//     taskError.innerHTML = ''
//   }

//   if (isFlag) {
//     return;
//   }

//   addTaskName();
// }

// const onedayContantBody = document.getElementById('onedayContantBody');

// let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
// let addTaskName = () => {
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let addTask = todoList.find(name => name.listName === lists.value);
//   console.log(addTask);

//   let selectDate = new Date(selectedDate.value).toLocaleDateString();
//   let fullDate = new Date().toLocaleDateString();

//   // past date no add task validation
//   if (selectDate < fullDate) {
//     console.log('not valid');
//     addTaskDateError.innerHTML = 'Please select valid date!';
//     return;
//   } else {
//     console.log('valid');
//     addTaskDateError.innerHTML = '';

//     taskArr.push({
//       dateTime: new Date(selectedDate.value).getTime(),
//       date: selectDate,
//       list: lists.value,
//       task: addTaskValue.value,
//       status: 'PENDING',
//       userId: CurrUser.id,
//       id: new Date().getTime()
//     })

//     localStorage.setItem('taskArr', JSON.stringify(taskArr));
//   }
//   console.log(taskArr);

//   addTaskValue.value = '';
//   selectedDate.value = '';
//   task();

// }

// let task = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//   let currUserTask = taskArr.filter(id => id.userId === CurrUser.id);
//   var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let task = (currUserTask.filter(x => x.status === 'PENDING')).sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);
//   // console.log(task); 
//   let tasksObject = task.reduce((prev, curr) => {
//     const date = convertDateTimeToDDMMYYYY(curr.dateTime);
//     if (prev[date] !== undefined) {
//       prev[date].push(curr);
//     }
//     else {
//       prev = {
//         ...prev,
//         [date]: [curr]
//       }
//     }
//     return { ...prev };
//   }, {})
//   displayTask.innerHTML = '';
//   Object.keys(tasksObject).map((key) => {
//     let taskHTML = `<div class="shaw-day" id=${key}>
//                         <p class="day-name">${key}</p><span class="day-name">${dayNames[new Date(tasksObject[key][0].date).getDay()]}</span>
//                     </div>`
//     tasksObject[key].map(task => {

//       const color = todoList.find((toDo) => toDo.listName === task.list)?.color || addTask.color;

//       taskHTML += `
//           <div class="task-list">
//                 <div class="task-list-name">
//                     <button class='taskBtn' onclick='completeTask(this)' data-bs-toggle="modal" data-bs-target="#completedTask"></button>
//                     <label class="task-name" for="task1" id='${task.id}'>${task.task}</label>
//                 </div>
//                 <div class="show-list-name">
//                     <button class="list-type" style="border : 2px solid ${color}"></button>
//                     <p class="list-heading">${task.list}</p>
//                 </div>
//           </div>
//       `
//     })
//     displayTask.innerHTML += taskHTML
//   })
// }
// task();

// const completeTaskName = document.getElementById('completeTaskName');
// let taskId;
// let completeTask = (e) => {
//   taskId = parseInt(e.nextElementSibling.id);
//   console.log(e.nextElementSibling.id);
// }
// let confirmTask = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let findIndexTask = taskArr.findIndex(x => x.id === taskId);
//   taskArr[findIndexTask].status = 'COMPLETED';
//   localStorage.setItem('taskArr', JSON.stringify(taskArr));
//   task();
// }




// // Start confirm list functionality *************************

// let weeklyData = document.getElementById('weeklyData');
// let monthlyData = document.getElementById('monthlyData');
// let yearlyData = document.getElementById('yearlyData');
// let allDataValue = document.getElementById('allDataValue');
// let completedTaskTotal = document.getElementById('completedTaskTotal');
// let totalTask = document.getElementById('totalTask');
// let completeTaskRatio = document.getElementById('completeTaskRatio');
// let listTotal = document.getElementById('listTotal');

// let time = 'weekly'

// let statisticsBtn = () => {
//   weekly();
// }


// let weekly = () => {
//   time = 'weekly';
//   console.log(time);
//   weeklyData.classList.add('active');
//   monthlyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneWeekData();
// }


// let monthly = () => {
//   time = 'monthly';
//   console.log(time);
//   monthlyData.classList.add('active');
//   weeklyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneMonthData();
// }
// let yearly = () => {
//   time = 'yearly';
//   console.log(time);

//   yearlyData.classList.add('active');
//   weeklyData.classList.remove('active');
//   monthlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneYearData();
// }
// let allData = () => {
//   time = 'all';
//   console.log(time);
//   allDataValue.classList.add('active');
//   weeklyData.classList.remove('active');
//   monthlyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allTimeData();
// }


// let oneWeekData = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastWeekDate = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
//   let weekData = modalListName.filter(x => x.dateTime > lastWeekDate);
//   console.log(weekData);
//   let completeTask = modalListName.filter(x => x.status === "COMPLETED");
//   console.log(completeTask);
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = weekData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / weekData.length);


//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';

//     modalListName.forEach((list) => {
//       // Filter tasks belonging to the current list
//       const listTasks = weekData.filter(task => task.list === list.listName);

//       // Count total tasks for the list
//       const totalTasks = listTasks.length;

//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       // const ratio = Math.floor((completedTasks / totalTasks) * 100) ? 
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

//       // Update HTML with total and completed tasks for the list
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {

//       const listTasks = weekData.filter(task => task.list === list.listName);
//       // Count total tasks for the list
//       const totalTasks = listTasks.length;
//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();

// }



// let oneMonthData = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastMonthDate = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;
//   let monthData = modalListName.filter(x => x.dateTime > lastMonthDate);
//   console.log(monthData);
//   let completeTask = modalListName.filter(x => x.status === "COMPLETED");
//   console.log(completeTask);
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = monthData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / monthData.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';

//     modalListName.forEach((list) => {
//       // Filter tasks belonging to the current list
//       const listTasks = monthData.filter(task => task.list === list.listName);

//       // Count total tasks for the list
//       const totalTasks = listTasks.length;

//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       // Update HTML with total and completed tasks for the list
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {

//       const listTasks = monthData.filter(task => task.list === list.listName);
//       // Count total tasks for the list
//       const totalTasks = listTasks.length;
//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();


// }

// let oneYearData = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastYearDate = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;
//   let yearData = modalListName.filter(x => x.dateTime > lastYearDate);
//   console.log(yearData);
//   let completeTask = modalListName.filter(x => x.status === "COMPLETED");
//   console.log(completeTask);
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = yearData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / yearData.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';

//     modalListName.forEach((list) => {
//       // Filter tasks belonging to the current list
//       const listTasks = yearData.filter(task => task.list === list.listName);

//       // Count total tasks for the list
//       const totalTasks = listTasks.length;

//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       // Update HTML with total and completed tasks for the list
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {

//       const listTasks = yearData.filter(task => task.list === list.listName);
//       // Count total tasks for the list
//       const totalTasks = listTasks.length;
//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();


// }

// let allTimeData = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);
//   console.log(modalListName);

//   let completeTask = modalListName.filter(x => x.status === "COMPLETED");
//   console.log(completeTask);
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = modalListName.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / modalListName.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     let currTask = taskArr.filter(id => id.userId === CurrUser.id);

//     modelList.innerHTML = '';

//     modalListName.forEach((list) => {
//       // Filter tasks belonging to the current list
//       const listTasks = currTask.filter(task => task.list === list.listName);

//       // Count total tasks for the list
//       const totalTasks = listTasks.length;
//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

//       // Update HTML with total and completed tasks for the list
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {

//       const listTasks = taskArr.filter(task => task.list === list.listName);
//       // Count total tasks for the list
//       const totalTasks = listTasks.length;
//       // Count completed tasks for the list
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;

//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();

// }


// const lists = document.getElementById('lists');

// let randomColor;
// let confirmList = () => {
//   // const listName = document.getElementById('listName');

//   const letters = "0123456789ABCDEF";
//   let randomColor = "#";
//   for (let i = 0; i < 6; i++) {
//     randomColor += letters[Math.floor(Math.random() * 16)];
//   }
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

//     let listObj = {
//       userId: CurrUser.id,
//       listId: new Date().getTime(),
//       listName: listData[0],
//       color: randomColor,
//     }
//     todoList.push(listObj);
//     localStorage.setItem('todoList', JSON.stringify(todoList));

//   addListFunction();
//   dropdownList();
// }


// let addListFunction = () => {
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//   let listName = todoList.filter(id => id.userId === CurrUser.id);
//   let currTask = taskArr.filter(id => id.userId === CurrUser.id);

//   listItem.innerHTML = ''
//   listName.map((list) => {
//     const listTasks = currTask.filter(task => task.list === list.listName).length;
//     listItem.innerHTML += `
//             <div class="lists">
//                 <div class="task">
//                   <button class="list-type" style="border : 2px solid ${list.color}"></button>
//                   <p class="list-heading">${list.listName}</p>
//                 </div>
//                 <p class="list-tasks total-list-task"><span class='total-list-task'>${listTasks} </span>tasks</p>
//             </div>
//     `
//   })
//   addedList.innerHTML = '';
// }
// addListFunction();


// let dropdownList = () => {
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let dropdownListName = todoList.filter(id => id.userId === CurrUser.id);
//   lists.innerHTML = '';
//   dropdownListName.map((name) => {
//     lists.innerHTML += `
//         <option>${name.listName}</option>
//   `
//   })
// }
// dropdownList();

// // End confirm list functionality *************************

// **********************************************************************************************************************************************
// console.log(taskArr.filter(x => x.userId === CurrUser.id));
// console.log(taskArr.filter(x => x.status === "COMPLETED" && x.userId === CurrUser.id));
// const nameLogo = document.getElementById('nameLogo');
// const greet = document.getElementById('greet');
// const listItem = document.getElementById('listItem');
// const addListInput = document.getElementById('addListInput');
// const addedList = document.getElementById('addedList');
// const progressList = document.getElementById('progressList');
// const modelList = document.getElementById('modelList');
// const selectedDate = document.getElementById('selectedDate');
// const addTaskValue = document.getElementById('addTaskValue');
// const displayTask = document.getElementById('displayTask');
// const addTaskDateError = document.getElementById('addTaskDateError');
// const taskError = document.getElementById('taskError');
// const listError = document.getElementById('listError');
// // const onedayContantBody = document.getElementById('onedayContantBody');
// // const completeTaskName = document.getElementById('completeTaskName');
// const weeklyData = document.getElementById('weeklyData');
// const monthlyData = document.getElementById('monthlyData');
// const yearlyData = document.getElementById('yearlyData');
// const allDataValue = document.getElementById('allDataValue');
// const completedTaskTotal = document.getElementById('completedTaskTotal');
// const totalTask = document.getElementById('totalTask');
// const completeTaskRatio = document.getElementById('completeTaskRatio');
// const listTotal = document.getElementById('listTotal');
// const lists = document.getElementById('lists');


// const TODOData = JSON.parse(localStorage.getItem('TODOData')) || [];
// const loginData = JSON.parse(localStorage.getItem('loginData'));
// let CurrUser = TODOData.find(email => email.email === loginData.email);
// const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// // const convertDateTimeToDDMMYYYY = (time) => {
// //   var d = new Date(time);
// //   return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
// // }

// function convertDateTimeToDDMMYYYY(dateTime) {
//   let date = new Date(dateTime);
//   let today = new Date();
//   let yesterday = new Date(today);
//   yesterday.setDate(today.getDate() - 1);
//   let tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);

//   if (date.toDateString() === today.toDateString()) {
//     return "Today";
//   } else if (date.toDateString() === yesterday.toDateString()) {
//     return "Yesterday";
//   } else if (date.toDateString() === tomorrow.toDateString()) {
//     return "Tomorrow";
//   } else {
//     let dd = String(date.getDate()).padStart(2, '0');
//     let mm = String(date.getMonth() + 1).padStart(2, '0');
//     let yyyy = date.getFullYear();
//     return dd + '/' + mm + '/' + yyyy;
//   }
// }

// // Start Name logo and bacagroundColor *************************
// nameLogo.innerHTML = CurrUser.firstName.charAt(0).toUpperCase() + CurrUser.lastName.charAt(0).toUpperCase();
// nameLogo.style.backgroundColor = getRandomColor();
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// // End Name logo and bacagroundColor *************************
// // Start Greetings *************************
// let greetings = () => {
//   let date = new Date();
//   let hour = date.getHours();
//   if (hour < 12) {
//     greet.innerHTML = "Good morning🌄," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else if (hour < 18) {
//     greet.innerHTML = "Good afternoon🌤️," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else if (hour < 21) {
//     greet.innerHTML = "Good evening🌆," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   } else {
//     greet.innerHTML = "Good night🌉," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
//   }
// }
// greetings();
// // End Greetings *************************

// // Start calender section *************************
// document.addEventListener("DOMContentLoaded", function () {
//   const calendarWrapper = document.getElementById("calendarWrapper");
//   const prevMonthBtn = document.getElementById("prevMonthBtn");
//   const nextMonthBtn = document.getElementById("nextMonthBtn");
//   const calenderMonth = document.getElementById("calenderMonth");

//   // Function to generate calendar content for a given month and year
//   function generateCalendar(year, month) {
//     const startDate = new Date(year, month, 1);
//     const endDate = new Date(year, month + 1, 0);
//     const currentDate = new Date();
//     let calendarHTML = `<div></div>`;
//     calenderMonth.innerHTML = `<div>${startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>`;
//     let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
//       let classes = "calendar-day";
//       if (date.getMonth() !== month) {
//         classes += " other-month";
//       }
//       if (date.toDateString() === currentDate.toDateString()) {
//         classes += " current-date";
//       }
//       if (date < currentDate) {
//         classes += " past-date";
//       }
//       calendarHTML += `<div><button class="${classes}" id="${date.getTime()}" onclick = dates(this)>${date.getDate()} ${dayNames[date.getDay()]}</button></div>`;
//     }
//     return calendarHTML;
//   }
//   // Initial load of current month's calendar
//   const currentDate = new Date();
//   calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

//   // Previous month button click event
//   prevMonthBtn.addEventListener("click", function () {
//     const currentMonth = currentDate.getMonth();
//     currentDate.setMonth(currentMonth - 1);
//     calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
//   });

//   // Next month button click event
//   nextMonthBtn.addEventListener("click", function () {
//     const currentMonth = currentDate.getMonth();
//     currentDate.setMonth(currentMonth + 1);
//     calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
//   });
// });

// // End calender section *************************
// // Start add list functionality *************************

// let listData;
// let addList = () => {

//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let currUserList = todoList.filter(id => id.userId === CurrUser.id);

//   if (currUserList.find(name => name.listName.toLowerCase() === addListInput.value.toLowerCase())) {
//     listError.innerHTML = 'List name is already exist!'
//     return
//   } else { 
//     if (addListInput.value.trim()) {
//       addedList.innerHTML = `
//               <div class="added-list">
//                   <p class="added-list-name" id="listName">${addListInput.value}<button class="added-list-remove-btn" ><i
//                               class="fa-solid fa-xmark" onclick='addListRemove(this)'></i></button></p>
//               </div>
//     `
//       listData = []
//       listData.push(addListInput.value)
//       addListInput.value = '';
//     } else {
//       addListInput.value = '';
//     }
//     listError.innerHTML = ''
//   }
// }

// let addListRemove = (e) => {
//   e.parentElement.parentElement.parentElement.remove();
// }
// // End add list functionality *************************

// let addTask = () => {
//   let isFlag = false;
//   if (!selectedDate.value) {
//     addTaskDateError.innerHTML = 'Please select date!'
//     isFlag = true;
//   } else {
//     addTaskDateError.innerHTML = ''
//   }
//   if (!addTaskValue.value) {
//     taskError.innerHTML = 'Please add task!'
//     isFlag = true;
//   } else {
//     taskError.innerHTML = ''
//   }
//   if (isFlag) {
//     return;
//   }
//   addTaskName();
// }


// let addTaskName = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let selectDate = new Date(selectedDate.value).toLocaleDateString();
//   let fullDate = new Date().toLocaleDateString();

//   if (selectDate < fullDate) {
//     addTaskDateError.innerHTML = 'Please select valid date!';
//     return;
//   } else {
//     addTaskDateError.innerHTML = '';
//     taskArr.push({
//       dateTime: new Date(selectedDate.value).getTime(),
//       date: selectDate,
//       list: lists.value,
//       task: addTaskValue.value,
//       status: 'PENDING',
//       userId: CurrUser.id,
//       id: new Date().getTime()
//     })
//     localStorage.setItem('taskArr', JSON.stringify(taskArr));
//   }
//   addTaskValue.value = '';
//   selectedDate.value = '';
//   task();
// }

// let tasksObject;
// let task = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//   let currUserTask = taskArr.filter(id => id.userId === CurrUser.id);
//   var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let task = (currUserTask.filter(status => status.status === 'PENDING')).sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);
//   tasksObject = task.reduce((prev, curr) => {
//     const date = convertDateTimeToDDMMYYYY(curr.dateTime);
//     if (prev[date] !== undefined) {
//       prev[date].push(curr);
//     }
//     else {
//       prev = {
//         ...prev,
//         [date]: [curr]
//       }
//     }
//     return { ...prev };
//   }, {})
//   displayTask.innerHTML = '';
//   Object.keys(tasksObject).map((key) => {
//     let taskHTML = `<div class="shaw-day" id=${key}>
//                         <p class="day-name">${key}</p><span class="day-name">${dayNames[new Date(tasksObject[key][0].date).getDay()]}</span>
//                     </div>`
//     tasksObject[key].map(task => {
//       const color = todoList.find((toDo) => toDo.listName === task.list)?.color || addTask.color;
//       taskHTML += `
//           <div class="task-list">
//                 <div class="task-list-name">
//                     <button class='taskBtn' onclick='completeTask(this)' data-bs-toggle="modal" data-bs-target="#completedTask"></button>
//                     <label class="task-name" for="task1" id='${task.id}'>${task.task}</label>
//                 </div>
//                 <div class="show-list-name">
//                     <button class="list-type" style="border : 2px solid ${color}"></button>
//                     <p class="list-heading">${task.list}</p>
//                 </div>
//           </div>
//       `
//     })
//     displayTask.innerHTML += taskHTML
//   })
// }
// task();

// let taskId;
// let completeTask = (e) => {
//   taskId = parseInt(e.nextElementSibling.id);
// }
// let confirmTask = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let findIndexTask = taskArr.findIndex(x => x.id === taskId);
//   taskArr[findIndexTask].status = 'COMPLETED';
//   localStorage.setItem('taskArr', JSON.stringify(taskArr));
//   task();
// }

// // Start confirm list functionality *************************



// let time = 'weekly'
// let statisticsBtn = () => {
//   weekly();
// }

// let weekly = () => {
//   time = 'weekly';
//   weeklyData.classList.add('active');
//   monthlyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneWeekData();
// }

// let monthly = () => {
//   time = 'monthly';
//   monthlyData.classList.add('active');
//   weeklyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneMonthData();
// }
// let yearly = () => {
//   time = 'yearly';
//   yearlyData.classList.add('active');
//   weeklyData.classList.remove('active');
//   monthlyData.classList.remove('active');
//   allDataValue.classList.remove('active');
//   oneYearData();
// }
// let allData = () => {
//   time = 'all';
//   allDataValue.classList.add('active');
//   weeklyData.classList.remove('active');
//   monthlyData.classList.remove('active');
//   yearlyData.classList.remove('active');
//   allTimeData();
// }

// let oneWeekData = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastWeekDate = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
//   let weekData = modalListName.filter(date => date.dateTime > lastWeekDate);
//   let completeTask = modalListName.filter(status => status.status === "COMPLETED");
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = weekData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / weekData.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';
//     modalListName.forEach((list) => {
//       const listTasks = weekData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {
//       const listTasks = weekData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();
// }

// let oneMonthData = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastMonthDate = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;
//   let monthData = modalListName.filter(date => date.dateTime > lastMonthDate);
//   let completeTask = modalListName.filter(status => status.status === "COMPLETED");
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = monthData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / monthData.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';
//     modalListName.forEach((list) => {
//       const listTasks = monthData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {
//       const listTasks = monthData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();
// }

// let oneYearData = () => {
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   const lastYearDate = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;
//   let yearData = modalListName.filter(date => date.dateTime > lastYearDate);
//   let completeTask = modalListName.filter(status => status.status === "COMPLETED");
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = yearData.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / yearData.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';
//     modalListName.forEach((list) => {
//       const listTasks = yearData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {
//       const listTasks = yearData.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();
// }

// let allTimeData = () => {
//   let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//   let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

//   let completeTask = modalListName.filter(status => status.status === "COMPLETED");
//   completedTaskTotal.innerHTML = completeTask.length;
//   totalTask.innerHTML = modalListName.length;
//   completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / modalListName.length);

//   let modalList = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
//     let modalListName = todoList.filter(id => id.userId === CurrUser.id);
//     let currTask = taskArr.filter(id => id.userId === CurrUser.id);
//     modelList.innerHTML = '';
//     modalListName.forEach((list) => {
//       const listTasks = currTask.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

//       modelList.innerHTML += `
//         <div class="model-lists">
//           <div class="list-body-name">
//             <button class="list-type" style="border : 2px solid ${list.color}"></button>
//             <p class="list-heading">${list.listName}</p>
//           </div>
//           <div class="list-body-total">
//             <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
//               class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
//           </div>
//           <div class="list-body-ratio">
//             <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
//           </div>
//         </div>
//       `;
//     });
//   };
//   modalList();

//   let progressBar = () => {
//     const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let progressBarList = todoList.filter(id => id.userId === CurrUser.id);
//     progressList.innerHTML = '';
//     progressBarList.map((list) => {
//       const listTasks = taskArr.filter(task => task.list === list.listName);
//       const totalTasks = listTasks.length;
//       const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
//       const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
//       progressList.innerHTML += `
//                         <div class="progress progress-list" style="background-color: #ddd ">
//                             <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
//                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                         `
//     })
//   }
//   progressBar();
// }

// let randomColor;
// let confirmList = () => {
//   const letters = "0123456789ABCDEF";
//   let randomColor = "#";
//   for (let i = 0; i < 6; i++) {
//     randomColor += letters[Math.floor(Math.random() * 16)];
//   }
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//     let listObj = {
//       userId: CurrUser.id,
//       listId: new Date().getTime(),
//       listName: listData[0],
//       color: randomColor,
//     }
//     todoList.push(listObj);
//     localStorage.setItem('todoList', JSON.stringify(todoList));

//   addListFunction();
//   dropdownList();
// }


// let addListFunction = () => {
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

//   let listName = todoList.filter(id => id.userId === CurrUser.id);
//   let currTask = taskArr.filter(id => id.userId === CurrUser.id);

//   listItem.innerHTML = ''
//   listName.map((list) => {
//     const listTasks = currTask.filter(task => task.list === list.listName).length;
//     listItem.innerHTML += `
//             <div class="lists">
//                 <div class="task">
//                   <button class="list-type" style="border : 2px solid ${list.color}"></button>
//                   <p class="list-heading">${list.listName}</p>
//                 </div>
//                 <p class="list-tasks total-list-task"><span class='total-list-task'>${listTasks} </span>tasks</p>
//             </div>
//     `
//   })
//   addedList.innerHTML = '';
// }
// addListFunction();


// let dropdownList = () => {
//   const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
//   let dropdownListName = todoList.filter(id => id.userId === CurrUser.id);
//   lists.innerHTML = '';
//   dropdownListName.map((name) => {
//     lists.innerHTML += `
//         <option>${name.listName}</option>
//   `
//   })
// }
// dropdownList();

// // End confirm list functionality *************************


// let dates = (e) => {
//   console.log(e.id);
//   let convertIntonumber = parseInt(e.id);
//   const date = convertDateTimeToDDMMYYYY(convertIntonumber);

//   console.log(date);
//   console.log(tasksObject);
  
//   let keys = Object.keys(tasksObject);
//   let x = keys.includes(date);
  
//   console.log(x);
  
//   if(x){
//     let element = document.getElementById(date);
//     element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
//   }
// }



// console.log(taskArr.filter(x => x.userId === CurrUser.id));
// console.log(taskArr.filter(x => x.status === "COMPLETED" && x.userId === CurrUser.id));

// *********************************************************************************************************************************************

const nameLogo = document.getElementById('nameLogo');
const greet = document.getElementById('greet');
const listItem = document.getElementById('listItem');
const addListInput = document.getElementById('addListInput');
const addedList = document.getElementById('addedList');
const progressList = document.getElementById('progressList');
const modelList = document.getElementById('modelList');
const selectedDate = document.getElementById('selectedDate');
const addTaskValue = document.getElementById('addTaskValue');
const displayTask = document.getElementById('displayTask');
const addTaskDateError = document.getElementById('addTaskDateError');
const taskError = document.getElementById('taskError');
const listError = document.getElementById('listError');
const weeklyData = document.getElementById('weeklyData');
const monthlyData = document.getElementById('monthlyData');
const yearlyData = document.getElementById('yearlyData');
const allDataValue = document.getElementById('allDataValue');
const completedTaskTotal = document.getElementById('completedTaskTotal');
const totalTask = document.getElementById('totalTask');
const completeTaskRatio = document.getElementById('completeTaskRatio');
const listTotal = document.getElementById('listTotal');
const lists = document.getElementById('lists');


const registerData = JSON.parse(localStorage.getItem('registerData')) || [];
const loginData = JSON.parse(localStorage.getItem('loginData'));
const CurrUser = registerData.find(email => email.email === loginData.email);
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Start date converter function 
function convertDateTimeToDDMMYYYY(dateTime) {
  let date = new Date(dateTime);
  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }
}
// End date converter function 
// Start Name logo and bacagroundColor 
nameLogo.innerHTML = CurrUser.firstName.charAt(0).toUpperCase() + CurrUser.lastName.charAt(0).toUpperCase();
nameLogo.style.backgroundColor = getRandomColor();
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// End Name logo and bacagroundColor 
// Start Greetings 
let greetings = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour < 12) {
    greet.innerHTML = "Good morning🌄," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
  } else if (hour < 18) {
    greet.innerHTML = "Good afternoon🌤️," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
  } else if (hour < 21) {
    greet.innerHTML = "Good evening🌆," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
  } else {
    greet.innerHTML = "Good night🌉," + ' ' + CurrUser.firstName + ' ' + CurrUser.lastName;
  }
}
greetings();
// End Greetings 
// Start calender section 
document.addEventListener("DOMContentLoaded", function () {
  const calendarWrapper = document.getElementById("calendarWrapper");
  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");
  const calenderMonth = document.getElementById("calenderMonth");

  // Function to generate calendar content for a given month and year
  function generateCalendar(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const currentDate = new Date();
    let calendarHTML = `<div></div>`;
    calenderMonth.innerHTML = `<div>${startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>`;
    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      let classes = "calendar-day";
      if (date.getMonth() !== month) {
        classes += " other-month";
      }
      if (date.toDateString() === currentDate.toDateString()) {
        classes += " current-date";
      }
      if (date < currentDate) {
        classes += " past-date";
      }
      calendarHTML += `<div><button class="${classes}" id="${date.getTime()}" onclick = dates(this)>${date.getDate()} ${dayNames[date.getDay()]}</button></div>`;
    }
    return calendarHTML;
  }

  function dates2() {
    const button = document.getElementsByClassName('current-date')[0];
    button.click()
  }
  // Initial load of current month's calendar
  const currentDate = new Date();
  calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  dates2()

  // Previous month button click event
  prevMonthBtn.addEventListener("click", function () {
    const currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth - 1);
    calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  });

  // Next month button click event
  nextMonthBtn.addEventListener("click", function () {
    const currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth + 1);
    calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  });
});

// End calender section 
// Start add list functionality 
let listData;
let addList = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  let currUserList = todoList.filter(id => id.userId === CurrUser.id);

  if (currUserList.find(name => name.listName.toLowerCase() === addListInput.value.toLowerCase())) {
    listError.innerHTML = 'List name is already exist!'
    return
  } else {
    if (addListInput.value.trim()) {
      addedList.innerHTML = `
              <div class="added-list">
                  <p class="added-list-name" id="listName">${addListInput.value}<button class="added-list-remove-btn" ><i
                              class="fa-solid fa-xmark" onclick='addListRemove(this)'></i></button></p>
              </div>
    `
      listData = []
      listData.push(addListInput.value)
      addListInput.value = '';
    } else {
      addListInput.value = '';
    }
    listError.innerHTML = ''
  }
}

let addListRemove = (e) => {
  e.parentElement.parentElement.parentElement.remove();
}
// End add list functionality 
// Start add task functionality 
let addTask = () => {
  let isFlag = false;
  if (!selectedDate.value) {
    addTaskDateError.innerHTML = 'Please select date!'
    isFlag = true;
  } else {
    addTaskDateError.innerHTML = ''
  }
  if (!addTaskValue.value.trim()) {
    isFlag = true;
  }
  if (!addTaskValue.value) {
    taskError.innerHTML = 'Please add task!'
    isFlag = true;
  } else {
    taskError.innerHTML = ''
  }
  if (isFlag) {
    return;
  }
  task();
  addTaskName();
}

let addTaskName = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let selectDate = new Date(selectedDate.value).toLocaleDateString();
  let pastDate = new Date(selectedDate.value).getTime();
  const now = Date.now();
  const yesterday = now - (1000 * 60 * 60 * 24);
  if (pastDate < yesterday) {
    addTaskDateError.innerHTML = 'Please select valid date!';
    return;
  } else {
    addTaskDateError.innerHTML = '';
    taskArr.push({
      dateTime: new Date(selectedDate.value).getTime(),
      date: selectDate,
      list: lists.value,
      task: addTaskValue.value,
      status: 'PENDING',
      userId: CurrUser.id,
      id: new Date().getTime()
    })
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
  }
  addTaskValue.value = '';
  selectedDate.value = '';
  addListFunction();
  task();
}
// End add task functionality 
// Start show task and date functionality 
let tasksObject;
let task = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

  let currUserTask = taskArr.filter(id => id.userId === CurrUser.id);
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let task = (currUserTask.filter(status => status.status === 'PENDING')).sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);

  tasksObject = task.reduce((prev, curr) => {
    const date = convertDateTimeToDDMMYYYY(curr.dateTime);
    if (prev[date] !== undefined) {
      prev[date].push(curr);
    }
    else {
      prev = {
        ...prev,
        [date]: [curr]
      }
    }
    return { ...prev };
  }, {})
  displayTask.innerHTML = '';
  Object.keys(tasksObject).map((key) => {
    let taskHTML = `<div class="shaw-day" id=${key}>
                        <p class="day-name">${key}</p><span class="day-name">• ${dayNames[new Date(tasksObject[key][0].date).getDay()]}</span>
                    </div>`
    tasksObject[key].map(task => {
      const color = todoList.find((toDo) => toDo.listName === task.list)?.color || addTask.color;
      taskHTML += `
          <div class="task-list">
                <div class="task-list-name">
                    <button class='taskBtn' onclick='completeTask(this)' data-bs-toggle="modal" data-bs-target="#completedTask"></button>
                    <label class="task-name" for="task1" id='${task.id}'>${task.task}</label>
                </div>
                <div class="show-list-name">
                    <button class="list-type" style="border : 2px solid ${color}"></button>
                    <p class="list-heading">${task.list}</p>
                </div>
          </div>
      `
    })
    displayTask.innerHTML += taskHTML
  })
}
task();
// End show task and date functionality 

let taskId;
let completeTask = (e) => {
  taskId = parseInt(e.nextElementSibling.id);
}
let confirmTask = () => {
  let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let findIndexTask = taskArr.findIndex(x => x.id === taskId);
  taskArr[findIndexTask].status = 'COMPLETED';
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
  task();
}

let time = 'weekly'
let statisticsBtn = () => {
  weekly();
}

let weekly = () => {
  time = 'weekly';
  weeklyData.classList.add('active');
  monthlyData.classList.remove('active');
  yearlyData.classList.remove('active');
  allDataValue.classList.remove('active');
  oneWeekData();
}

let monthly = () => {
  time = 'monthly';
  monthlyData.classList.add('active');
  weeklyData.classList.remove('active');
  yearlyData.classList.remove('active');
  allDataValue.classList.remove('active');
  oneMonthData();
}
let yearly = () => {
  time = 'yearly';
  yearlyData.classList.add('active');
  weeklyData.classList.remove('active');
  monthlyData.classList.remove('active');
  allDataValue.classList.remove('active');
  oneYearData();
}
let allData = () => {
  time = 'all';
  allDataValue.classList.add('active');
  weeklyData.classList.remove('active');
  monthlyData.classList.remove('active');
  yearlyData.classList.remove('active');
  allTimeData();
}

// Start show weekly data in modal 
let oneWeekData = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

  const lastWeekDate = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
  let weekData = modalListName.filter(date => date.dateTime > lastWeekDate);
  let completeTask = modalListName.filter(status => status.status === "COMPLETED");
  completedTaskTotal.innerHTML = completeTask.length;
  totalTask.innerHTML = weekData.length;
  completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / weekData.length || 0);

  const modalListAndProgressbar = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    let modalListName = todoList.filter(id => id.userId === CurrUser.id);
    modelList.innerHTML = '';
    progressList.innerHTML = '';
    modalListName.forEach((list) => {
      const listTasks = weekData.filter(task => task.list === list.listName);
      const totalTasks = listTasks.length;
      const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
      const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
      modelList.innerHTML += `
        <div class="model-lists">
          <div class="list-body-name">
            <button class="list-type" style="border : 2px solid ${list.color}"></button>
            <p class="list-heading">${list.listName}</p>
          </div>
          <div class="list-body-total">
            <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
              class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
          </div>
          <div class="list-body-ratio">
            <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
          </div>
        </div>
      `;
      progressList.innerHTML += `
            <div class="progress progress-list" style="background-color: #ddd;">
                <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `
    });
  };
  modalListAndProgressbar();
}
// End show weekly data in modal 
// Start show monthly data in modal 
let oneMonthData = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

  const lastMonthDate = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;
  let monthData = modalListName.filter(date => date.dateTime > lastMonthDate);
  let completeTask = modalListName.filter(status => status.status === "COMPLETED");
  completedTaskTotal.innerHTML = completeTask.length;
  totalTask.innerHTML = monthData.length;
  completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / monthData.length || 0);

  const modalListAndProgressbar = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    let modalListName = todoList.filter(id => id.userId === CurrUser.id);
    modelList.innerHTML = '';
    progressList.innerHTML = '';
    modalListName.forEach((list) => {
      const listTasks = monthData.filter(task => task.list === list.listName);
      const totalTasks = listTasks.length;
      const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
      const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
      modelList.innerHTML += `
        <div class="model-lists">
          <div class="list-body-name">
            <button class="list-type" style="border : 2px solid ${list.color}"></button>
            <p class="list-heading">${list.listName}</p>
          </div>
          <div class="list-body-total">
            <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
              class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
          </div>
          <div class="list-body-ratio">
            <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
          </div>
        </div>
      `;
      progressList.innerHTML += `
            <div class="progress progress-list" style="background-color: #ddd;">
                <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `
    });
  };
  modalListAndProgressbar();
}
// End show monthly data in modal 
// Start show yearly data in modal 
let oneYearData = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

  const lastYearDate = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;
  let yearData = modalListName.filter(date => date.dateTime > lastYearDate);
  let completeTask = modalListName.filter(status => status.status === "COMPLETED");
  completedTaskTotal.innerHTML = completeTask.length;
  totalTask.innerHTML = yearData.length;
  completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / yearData.length || 0);


  const modalListAndProgressbar = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    let modalListName = todoList.filter(id => id.userId === CurrUser.id);
    modelList.innerHTML = '';
    progressList.innerHTML = '';
    modalListName.forEach((list) => {
      const listTasks = yearData.filter(task => task.list === list.listName);
      const totalTasks = listTasks.length;
      const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
      const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;
      modelList.innerHTML += `
        <div class="model-lists">
          <div class="list-body-name">
            <button class="list-type" style="border : 2px solid ${list.color}"></button>
            <p class="list-heading">${list.listName}</p>
          </div>
          <div class="list-body-total">
            <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
              class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
          </div>
          <div class="list-body-ratio">
            <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
          </div>
        </div>
      `;
      progressList.innerHTML += `
            <div class="progress progress-list" style="background-color: #ddd;">
                <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `
    });
  };
  modalListAndProgressbar();

}
// End show yearly data in modal 
// Start show all data in modal 
let allTimeData = () => {
  let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  let modalListName = taskArr.filter(id => id.userId === CurrUser.id);

  let completeTask = modalListName.filter(status => status.status === "COMPLETED");
  completedTaskTotal.innerHTML = completeTask.length;
  totalTask.innerHTML = modalListName.length;
  completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / modalListName.length || 0);

  let modalListAndProgressbar = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
    let modalListName = todoList.filter(id => id.userId === CurrUser.id);
    let currTask = taskArr.filter(id => id.userId === CurrUser.id);
    modelList.innerHTML = '';
    progressList.innerHTML = '';
    modalListName.forEach((list) => {
      const listTasks = currTask.filter(task => task.list === list.listName);
      const totalTasks = listTasks.length;
      const completedTasks = listTasks.filter(task => task.status === 'COMPLETED').length;
      const ratio = totalTasks !== 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

      modelList.innerHTML += `
        <div class="model-lists">
          <div class="list-body-name">
            <button class="list-type" style="border : 2px solid ${list.color}"></button>
            <p class="list-heading">${list.listName}</p>
          </div>
          <div class="list-body-total">
            <p class="list-name" id="list${list.listName}">${completedTasks}</p><span class="list-total-value">/</span><span
              class="list-total-value" id="listTotal${list.listName}">${totalTasks}</span>
          </div>
          <div class="list-body-ratio">
            <p class="list-name">${ratio}</p><span class="list-total-value">%</span>
          </div>
        </div>
      `;
      progressList.innerHTML += `
        <div class="progress progress-list" style="background-color: #ddd;">
            <div class="progress-bar progress-bar-list" style="background-color: ${list.color}; width: ${ratio}%;" role="progressbar"
                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
         `
    });
  };
  modalListAndProgressbar();
}

// End show all data in modal 
// Start confirm list functionality 
let randomColor;
let confirmList = () => {
  const listName = document.getElementById('listName');
  const letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  if (listName) {
    let listObj = {
      userId: CurrUser.id,
      listId: new Date().getTime(),
      listName: listData[0],
      color: randomColor,
    }
    todoList.push(listObj);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  } else {
    return
  }

  addListFunction();
  dropdownList();
}
// End confirm list functionality 

let addListFunction = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  let listName = todoList.filter(id => id.userId === CurrUser.id);
  let currTask = taskArr.filter(id => id.userId === CurrUser.id);

  listItem.innerHTML = ''
  listName.map((list) => {
    const listTasks = currTask.filter(task => task.list === list.listName).length;
    listItem.innerHTML += `
            <div class="lists">
                <div class="task">
                  <button class="list-type" style="border : 2px solid ${list.color}"></button>
                  <p class="list-heading">${list.listName}</p>
                </div>
                <p class="list-tasks total-list-task"><span class='total-list-task'>${listTasks} </span>tasks</p>
            </div>
    `
  })
  addedList.innerHTML = '';
}
addListFunction();


let dropdownList = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  let dropdownListName = todoList.filter(id => id.userId === CurrUser.id);
  lists.innerHTML = '';
  dropdownListName.map((name) => {
    lists.innerHTML += `
        <option>${name.listName}</option>
  `
  })
}
dropdownList();

// Start scroll into view functionality 
let dates = (e) => {
  let convertIntoNumber = parseInt(e.id);
  const date = convertDateTimeToDDMMYYYY(convertIntoNumber);

  let keys = Object.keys(tasksObject);
  let checkDate = keys.includes(date);

  if (checkDate) {
    let element = document.getElementById(date);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
// End scroll into view functionality 















