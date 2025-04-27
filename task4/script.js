// Get elements
const noteTitle = document.getElementById('noteTitle');
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

// Load notes from Local Storage
document.addEventListener('DOMContentLoaded', loadNotes);

// Add new note
addNoteBtn.addEventListener('click', () => {
  const title = noteTitle.value.trim();
  const content = noteInput.value.trim();
  
  if (title !== '' || content !== '') {
    const newNote = { title, content, pinned: false };
    saveNote(newNote);
    renderNotes();
    noteTitle.value = '';
    noteInput.value = '';
  }
});

// Save note to Local Storage
function saveNote(note) {
  let notes = getNotesFromLocalStorage();
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Load and render notes
function loadNotes() {
  renderNotes();
}

// Render notes to page
function renderNotes() {
  notesContainer.innerHTML = '';
  let notes = getNotesFromLocalStorage();

  // Show pinned notes first
  notes.sort((a, b) => b.pinned - a.pinned);

  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    noteDiv.innerHTML = `
      <h3>${note.title ? note.title : 'Untitled'}</h3>
      <p>${note.content}</p>
      <div class="buttons">
        <button onclick="deleteNote(${index})">Delete</button>
        <button class="pin-btn" onclick="togglePin(${index})">${note.pinned ? 'Unpin' : 'Pin'}</button>
      </div>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

// Delete note
function deleteNote(index) {
  let notes = getNotesFromLocalStorage();
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// Pin/Unpin note
function togglePin(index) {
  let notes = getNotesFromLocalStorage();
  notes[index].pinned = !notes[index].pinned;
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// Get notes from Local Storage
function getNotesFromLocalStorage() {
  return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
}
