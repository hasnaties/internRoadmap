console.log('JS is running.');

const sideMenu = document.getElementById('side-menu');
const rightSide = document.getElementById('right-side');

//dropdown menu
function dropdown() {
  const dropdown = document.getElementById('drop-down');
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
}

// toggle menu switch
function toggle() {

  if (sideMenu.style.display === 'none') {
    sideMenu.style.display = 'flex';
    rightSide.style.display = 'none';

  } else if (rightSide.style.display = 'none') {
    rightSide.style.display = 'block';
    sideMenu.style.display = 'none';
  }
}

// Reset Elements Display
function resetDisplay() {
  const innerWidth = window.innerWidth;

  if (innerWidth > 680) {
    sideMenu.style.display = 'flex';
    rightSide.style.display = 'block';
  } else {
    rightSide.style.display = 'block';
    sideMenu.style.display = 'none';
  }
}

window.addEventListener('resize', resetDisplay);