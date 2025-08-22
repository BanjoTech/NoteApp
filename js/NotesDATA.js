const newId = Date.now().toString() + Math.random().toString().slice(2);
const formatedDate = new Date().toISOString(); // Get today's date in YYYY-MM-DD format

// Create the new note object
export const Note = [{
  id: newId,
  title: 'title',
  body: 'body',
  date: formatedDate 
}];

