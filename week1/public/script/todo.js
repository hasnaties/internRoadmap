console.log('JS is running.');

const urlDefault = 'http://localhost:4000/api';
const gridContainer = document.getElementById('grid')

// update grid
function updateGrid(title, completed) {

  gridContainer.innerHTML += `<div class="data center">
        <p id="taskTitle"><strong>Title:</strong> ${title}</p>
        <p id="taskDone"><strong>Completed:</strong> ${completed}</p>
      </div>`;
}

// fetch tasks in UI
function fetchTask() {

  const url = `${urlDefault}/tasks`;

  fetch(url).then((res) => {
    res.json().then((jsonRes) => {
      console.log(jsonRes);
      jsonRes.forEach(e => {

        var { title, completed } = e;
        completed = completed ? 'Yes' : 'No';

        updateGrid(title, completed);
      });

    });
  })
}

fetchTask();


// Edit & update: Modal
const addButton = document.getElementById('btn-add');
const modal = document.getElementById('modal');

addButton.addEventListener('click', openModal);

function closeModal() {
  modal.style.display = 'none';
}

function openModal() {
  modal.style.display = 'block';
}

//-- Adding Task

function saveNote() {
  const noteText = document.getElementById('noteText').value;
  console.log('Note saved:', noteText);

  const payload = {
    title: noteText
  }

  //Post
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // Convert data to JSON string
  }

  const url = `${urlDefault}/create`;

  fetch(url, postOptions)
    .then(response => response.json())
    .then(data => {
      gridContainer.innerHTML = '';
      fetchTask()
    })
    .catch(error => {
      console.error('Error:', error);
    });

  closeModal();
}