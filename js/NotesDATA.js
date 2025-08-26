// Retrieve notes from localStorage
const savedNotes = JSON.parse(localStorage.getItem('notesapp-notes')) || [];

// Generate a new note ID and date
const newId = Date.now().toString() + Math.random().toString().slice(2);
const formatedDate = new Date().toISOString(); // Get today's date in YYYY-MM-DD format

// Function to sort notes by date
export function sortNotesByDate(notes) {
  return notes.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Sort the saved notes
export const sortedNotes = sortNotesByDate(savedNotes);

// Create the new note object
const newNote = {
  id: newId,
  title: 'title',
  body: 'body',
  date: formatedDate,
};

// Add the new note to the saved notes
savedNotes.push(newNote);

// Save the updated notes to localStorage
localStorage.setItem('notesapp-notes', JSON.stringify(savedNotes));

// Export the updated notes array
export const Note = savedNotes;