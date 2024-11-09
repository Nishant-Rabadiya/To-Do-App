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
const calendarWrapper = document.getElementById("calendarWrapper");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const calenderMonth = document.getElementById("calenderMonth");

const registerData = JSON.parse(localStorage.getItem('registerData')) || [];
const loginData = JSON.parse(localStorage.getItem('loginData'));
const CurrUser = registerData.find(email => email.email === loginData.email);
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Start date converter function 
function convertDateTimeToDDMMYYYY(dateTime) {
  const date = new Date(dateTime);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }
}

const setDatePickerAttribute = () => {
  selectedDate.min = new Date().toISOString().split("T")[0];
}
setDatePickerAttribute();
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
const greetings = () => {
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

// Function to generate calendar content for a given month and year
function generateCalendar(year, month) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const currentDate = new Date();
  let calendarHTML = `<div></div>`;
  calenderMonth.innerHTML = `<div>${startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>`;
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

const updateCalendar = (offset) => {
  currentDate.setMonth(currentDate.getMonth() + offset);
  calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
};
const currentDate = new Date();
calendarWrapper.innerHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
prevMonthBtn.addEventListener("click", () => updateCalendar(-1));
nextMonthBtn.addEventListener("click", () => updateCalendar(1));
// End calender section 
// Start add list functionality 
let listData;
addListInput.addEventListener('input', () => {
  !addListInput.value ? listError.innerHTML = 'Please add list!' : listError.innerHTML = '';
})
const addList = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const currUserList = todoList.filter(id => id.userId === CurrUser.id);
  if (currUserList.find(list => list.listName === addListInput.value.toLowerCase())) {
    listError.innerHTML = 'List name is already exist!'
    return
  } else {
    if (addListInput.value.trim()) {
      addedList.innerHTML = `
              <div class="added-list">
                  <p class="added-list-name" id="listName">${addListInput.value}<button class="added-list-remove-btn" onclick='addListRemove(this)'><i class="fa-solid fa-xmark"></i></button></p>
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

const addListRemove = (e) => {
  e.parentElement.parentElement.remove();
}
// End add list functionality 
// Start add task functionality 
lists.addEventListener('input', () => {
  !lists.value ? listTaskError.innerHTML = 'No list avalible please create your list!' : listTaskError.innerHTML = '';
});
selectedDate.addEventListener('input', () => {
  !selectedDate.value ? addTaskDateError.innerHTML = 'Please select date!' : addTaskDateError.innerHTML = '';
});
addTaskValue.addEventListener('input', () => {
  !addTaskValue.value ? taskError.innerHTML = 'Please add task!' : taskError.innerHTML = '';
});
const listTaskError = document.getElementById('listTaskError');
const addTask = () => {
  let isFlag = false;
  if (!lists.value) {
    listTaskError.innerHTML = 'No list avalible please create your list!';
    isFlag = true;
  } else {
    listTaskError.innerHTML = '';
  }
  if (!selectedDate.value) {
    addTaskDateError.innerHTML = 'Please select date!'
    isFlag = true;
  } else {
    addTaskDateError.innerHTML = '';
  }
  if (!addTaskValue.value.trim()) {
    isFlag = true;
  }
  if (!addTaskValue.value) {
    taskError.innerHTML = 'Please add task!'
    isFlag = true;
  } else {
    taskError.innerHTML = '';
  }
  if (isFlag) {
    return;
  }
  task();
  addTaskName();
}

const addTaskName = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const selectDate = new Date(selectedDate.value).toLocaleDateString();
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
  addTaskValue.value = '';
  selectedDate.value = '';
  addListFunction();
  task();
  alert('Task add successfully!');
}
// End add task functionality 
// Start show task and date functionality 
let tasksObject;
const task = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const currUserTask = taskArr.filter(id => id.userId === CurrUser.id);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const task = currUserTask.sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);
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
  }, {});
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
                    <button class='taskBtn'${task.status === 'COMPLETED' ? "disabled" : ''} onclick='completeTask(this)' data-bs-toggle="modal" data-bs-target="#completedTask"></button>
                    <label  class='task-name ${task.status === 'COMPLETED' ? "completed-task" : ''}' for="task1" id='${task.id}'>${task.task}</label>
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
const completeTask = (e) => {
  taskId = parseInt(e.nextElementSibling.id);
}
const confirmTask = () => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const findIndexTask = taskArr.findIndex(x => x.id === taskId);
  taskArr[findIndexTask].status = 'COMPLETED';
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
  task();
}

const offcanvasAddBtn = () => {
  selectedDate.value = '';
  addTaskValue.value = '';
  addTaskDateError.innerHTML = '';
  taskError.innerHTML = '';
  listTaskError.innerHTML = ''
}

const setActive = (element) => {
  weeklyData.classList.remove('active');
  monthlyData.classList.remove('active');
  yearlyData.classList.remove('active');
  allDataValue.classList.remove('active');
  element.classList.add('active');
};

const statisticsBtn = () => {
  weekly();
};

const weekly = () => {
  setActive(weeklyData);
  displayData('week');
};

const monthly = () => {
  setActive(monthlyData);
  displayData('month');
};

const yearly = () => {
  setActive(yearlyData);
  displayData('year');
};

const allData = () => {
  setActive(allDataValue);
  displayData('all');
};

const displayData = (interval) => {
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const modalListName = taskArr.filter(id => id.userId === CurrUser.id);
  let startDate;
  const now = Date.now();
  const yesterday = now - (1000 * 60 * 60 * 24);
  switch (interval) {
    case 'week':
      startDate = yesterday + 7 * 24 * 60 * 60 * 1000;
      break;
    case 'month':
      startDate = yesterday + 30 * 24 * 60 * 60 * 1000;
      break;
    case 'year':
      startDate = yesterday + 365 * 24 * 60 * 60 * 1000;
      break;
    default:
      startDate = 0;
  }

  const filteredData = interval !== 'all' ? modalListName.filter(date => date.dateTime < startDate) : modalListName;
  const completeTask = modalListName.filter(status => status.status === "COMPLETED");
  completedTaskTotal.innerHTML = completeTask.length;
  totalTask.innerHTML = filteredData.length;
  completeTaskRatio.innerHTML = Math.floor(completeTask.length * 100 / filteredData.length || 0);

  modelList.innerHTML = '';
  progressList.innerHTML = '';
  todoList.filter(id => id.userId === CurrUser.id).forEach((list) => {
    const listTasks = filteredData.filter(task => task.list === list.listName);
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
    `;
  });
};

// End show all data in modal 
// Start confirm list functionality 
let randomColor;
const confirmList = () => {
  const listName = document.getElementById('listName');
  const letters = "0123456789ABCDEF";
  randomColor = "#";
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
    alert('List added successfully!');
  } else {
    return
  }
  addListFunction();
}
// End confirm list functionality 
const addListFunction = () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const listName = todoList.filter(id => id.userId === CurrUser.id);
  const currTask = taskArr.filter(id => id.userId === CurrUser.id);
  listItem.innerHTML = ''
  lists.innerHTML = '';
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
    lists.innerHTML += `
          <option>${list.listName}</option>
        `
  })
  addedList.innerHTML = '';
}
addListFunction();

// Start scroll into view functionality 
let activeDateButton = null;
const dates = (e) => {
  if (activeDateButton) {
    activeDateButton.classList.remove('active-date-btn');
  }
  e.classList.add('active-date-btn');
  activeDateButton = e;
  const convertIntoNumber = parseInt(e.id);
  const date = convertDateTimeToDDMMYYYY(convertIntoNumber);
  const keys = Object.keys(tasksObject);
  const checkDate = keys.includes(date);
  if (checkDate) {
    let element = document.getElementById(date);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
// End scroll into view functionality 
function scrollIntoViewOnCurrentDate() {
  const button = document.getElementsByClassName('current-date')[0];
  button.click()
}
scrollIntoViewOnCurrentDate();

