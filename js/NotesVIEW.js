import { sortedNotes } from './NotesDATA.js';

export function renderNotes(){
  let noteHTML = '';

  sortedNotes.forEach(note => {
    noteHTML += `
      <div class="notes__sidebar">
            <button class="notes__add" type="button">Add Note</button>
            <div class="notes__list">
                <div class="notes__list-item notes__list-item--selected" data-note-id="${note.id}">
                    <div class="notes__small-title">${note.title}</div>
                    <div class="notes__small-body">${note.body}</div>
                    <div class="notes__small-updated">${note.date}</div>
                </div>
            </div>
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a title...">
            <textarea class="notes__body">I am the notes body...</textarea>
        </div>
    `;
  });

let noteContainer = document.querySelector('.notes');
noteContainer.innerHTML = noteHTML;
}

