// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');
// const itemList = document.getElementById('itemList');

// button1.addEventListener('click', function() {
//   const item = 'Button 1';
//   const li = document.createElement('li');
//   li.textContent = item;
//   itemList.appendChild(li);
// });

// button2.addEventListener('click', function() {
//   const item = 'Button 2';
//   const li = document.createElement('li');
//   li.textContent = item;
//   itemList.appendChild(li);
// });

// button3.addEventListener('click', function() {
//   const item = 'Button 3';
//   const li = document.createElement('li');
//   li.textContent = item;
//   itemList.appendChild(li);
// });

const buttons = document.getElementById('buttons');
const itemList = document.getElementById('itemList');

buttons.addEventListener('click', function(event) {
  if (event.target.classList.contains('item-button')) {
    const item = event.target.textContent;
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  }
});
