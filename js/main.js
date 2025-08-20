const Notes = [{
  id: "",
  title: "Lecture Notes",
  body: "This is the body of the lecture notes.",
  date: "Monday 2:40 PM",
}]


const newId = Date.now().toString() + Math.random().toString().slice(2);

  // Create the new note object
  const newNote = {
    id: newId,
    title: "Smoke Igbo",
    body: "This is the body of the Smoke Igbo notes.",
    date: new Date().toISOString().slice(0, 10), // Get today's date in YYYY-MM-DD format
  };

  // Add the new note to the Notes array
  Notes.push(newNote);

  console.log("New note added:", newNote);
  console.log("All notes:", Notes);