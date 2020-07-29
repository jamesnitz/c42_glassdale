import { getNotes, useNotes } from "./NoteProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")
  
eventHub.addEventListener("noteButtonClicked", event => {
  getNotes().then(() => {
    const allNotes = useNotes()
    render(allNotes)
  })
})

const render = (notes) => {
  const criminals = useCriminals()
  contentTarget.innerHTML = `
  <section class="noteList">
  ${
    notes.map(note => {
      const criminalName = criminals.find(criminal => criminal.id === note.criminalId )
      return `
            <section class="note">
              <h6>${note.timestamp}</h6>
              <h2>Note about ${criminalName.name}</h2>
              ${note.text}<br>
              <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
    }).join("")
  }
  </section>
  `
}