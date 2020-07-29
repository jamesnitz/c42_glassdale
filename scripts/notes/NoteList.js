import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")
  
eventHub.addEventListener("noteButtonClicked", event => {
  getNotes().then(() => {
    const allNotes = useNotes()
    render(allNotes)
  })
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes)
           }
       )
    }
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("editNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--")
    const editEvent = new CustomEvent("editButtonClicked", {
      detail: {
        noteId: id
      }
    })
    eventHub.dispatchEvent(editEvent)
  
  }
})

const render = (notes) => {
  if (notes.length > 0)
  {
    const criminals = useCriminals()
    contentTarget.innerHTML = `
    <section class="noteList">
    ${
      notes.map(note => {
        const foundCriminal = criminals.find(criminal => criminal.id === note.criminalId )
        return `
        <section class="note">
        <h6>${note.timestamp}</h6>
        <h2>Note about ${foundCriminal.name}</h2>
        ${note.text}<br>
        <button id="editNote--${note.id}">Edit</button>
        <button id="deleteNote--${note.id}">Delete</button>
        </section>
        `
      }).join("")
    }
    </section>
    `
  } else {
    contentTarget.innerHTML = `<h2>B R U H</h2>`
  }
}