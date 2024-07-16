
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    // Input sanitization
    const temp = document.createElement('li');
    temp.innerText = todo;

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${temp.innerHTML}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

// Add new To Do
addForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const toDo = addForm.add.value.trim();
    if (toDo.length) {
        generateTemplate(toDo);
        addForm.reset();
    }
    // addForm.add.value = '';
    
});

// Delete todos
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterToDo = text => {
    Array.from(list.children)
        .filter((li) => !li.textContent.toLowerCase().includes(text))
        .forEach((t)=>  t.classList.add('filtered'))

    Array.from(list.children)
        .filter((li) => li.textContent.toLowerCase().includes(text))
        .forEach((t)=>  t.classList.remove('filtered'))
};

// Search
search.addEventListener('keyup', e => {       
    const inputText = search.value.trim().toLowerCase();
    filterToDo(inputText);
});

// prevent search box refresh
search.addEventListener('keydown', e => {              
    (e.keyCode === 13) ? e.preventDefault(): undefined
});


// Bugs
// 1. Add to do - sanitize the input : RESOLVED
// 2. Add to do - wat if user enters a long string

// Improvements
// 1. add clear fields for search & Add to dos
// 2. Edit to dos
