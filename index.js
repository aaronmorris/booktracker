console.log('Index.js loaded');

const books = [
  { id: 0, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isRead: true },
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isRead: true },
  { id: 2, title: '1984', author: 'George Orwell', isRead: true },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', isRead: false },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isRead: false },
  { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', isRead: false }
];

renderBooks();

function renderBooks() {
  const tableBody = document.querySelector('#book-list tbody');

  // Clear any existing rows before re-rendering
  tableBody.innerHTML = '';

  books.forEach((book) => {
    const row = document.createElement('tr');

    // Choose button text and action based on current status
    const actionButton = book.isRead
      ? `<button onclick="handleToggleReadStatus(${book.id})">Mark as Unread</button>`
      : `<button onclick="handleToggleReadStatus(${book.id})">Mark as Read</button>`;

    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isRead ? 'Read' : 'Unread'}</td>
      <td>
        ${actionButton}
      </td>
    `;

    tableBody.appendChild(row);
  });
}


function handleMarkAsRead(bookId) {
  alert('Mark as Read button clicked');
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.isRead = true;
    renderBooks();
  }
}

function handleMarkAsUnread(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.isRead = false;
    renderBooks();
  }
}

function handleToggleReadStatus(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.isRead = !book.isRead;
    renderBooks();
  }
}

function handleAddButton(event) {
  console.log('Add button clicked');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  books.push({ id: books.length, title, author, isRead: false });
  renderBooks();
}