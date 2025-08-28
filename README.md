# 📚 Book Tracker App

## 📖 Project Description
Create a simple JavaScript application to manage a list of books a user wants to read.
The app should allow adding new books, marking them as read, and listing all books with their status.

This assessment tests your ability to:
- Work with arrays and objects (simple data model)
- Implement functions for input, processing, and output
- Display results clearly (console or browser-based)

---

## 🗂️ Data Model
A book should be represented as an object:

```js
{
  id: number,
  title: string,
  author: string,
  isRead: boolean
}
```

The main data store will be an array of books:

```js
let books = [];
```

---

## ✅ Requirements

1. **Add a Book**
   - **Input:** Title and Author
   - **Process:** Create a book object with `isRead = false` and add it to the `books` array
   - **Output:** Confirmation message, e.g.:
     ```
     Book added: The Hobbit by J.R.R. Tolkien
     ```

2. **Mark a Book as Read**
   - **Input:** Book ID (or Title)
   - **Process:** Find the book in the array and update `isRead = true`
   - **Output:** Confirmation message, e.g.:
     ```
     Marked 'The Hobbit' as read
     ```

3. **List All Books**
   - **Input:** Command to list all books
   - **Process:** Loop through the `books` array and print each book with its read/unread status
   - **Output:**
     ```
     1. The Hobbit by J.R.R. Tolkien [Read]
     2. Dune by Frank Herbert [Unread]
     ```

---

## 🌟 Stretch Goals (Optional)
- Delete a book
- Search for a book by title or author
- Store data in `localStorage` (if using browser)
- Create a simple HTML interface (form to add, table to display)

---

## ▶️ Example Usage

```js
addBook("The Hobbit", "J.R.R. Tolkien");
addBook("Dune", "Frank Herbert");
markBookAsRead(1);
listBooks();
```

**Output:**
```
Book added: The Hobbit by J.R.R. Tolkien
Book added: Dune by Frank Herbert
Marked 'The Hobbit' as read

Books:
1. The Hobbit by J.R.R. Tolkien [Read]
2. Dune by Frank Herbert [Unread]
```
