document.getElementById('add').addEventListener('click', function() {
  addItem();
});

document.getElementById('mainForm').addEventListener('submit', function (e) {
  e.preventDefault();
});

document.getElementById('newInput').onkeypress = function() {
  if (event.which == 13) {
    addItem();
  };
}

function addItem() {
  const item = document.getElementById('newInput').value;
  const ul = document.getElementById('list');
  const li = document.createElement('li');

  if (item === '') {
    return;
  }
  li.append(item);
  li.setAttribute("id", "item");
  ul.appendChild(li);

  document.getElementById('newInput').value = '';
}
