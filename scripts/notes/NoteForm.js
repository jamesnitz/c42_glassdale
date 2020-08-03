import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { saveNote, useNotes, editNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const noteFormButtonTarget = document.querySelector(".noteForm_button")
const eventHub = document.querySelector(".container")

const renderNoteForm = () => {
    let criminalsCollection = useCriminals()
    const renderSelect = () => {
        contentTarget.innerHTML = `
        <input type="hidden" class="hiddenId" id="note-id" />
        <fieldset>
        <label class="label" for="note-text">Note:</>
        <input type="text" id="note-text">
        </fieldset>
        <fieldset>
        <label class="label" for="note-criminal">Criminal:</>
        <select id="note-criminal">
        <option value="0">***Select Criminal***</option>
        ${criminalsCollection.map(criminal => {
            return `<option value="${criminal.id}">${criminal.name}</option>`
        })}
        </select>
        </fieldset>
        `
        noteFormButtonTarget.innerHTML = `<button id="saveNote">Save Note</button>`
    }
   if (criminalsCollection.length === 0) {
       getCriminals().then(() => {
           criminalsCollection = useCriminals()
           renderSelect()
        })
    } else {
        renderSelect()
        
    }
}

eventHub.addEventListener("noteFormButtonClicked", event => {
  renderNoteForm()
})

eventHub.addEventListener("editButtonClicked", event => {
    document.querySelector(".note_button").innerHTML = ""
    renderNoteForm()
    const noteToBeEdited = parseInt(event.detail.noteId)
    const allNotesArray = useNotes()
    const foundNote = allNotesArray.find(note => note.id === noteToBeEdited)
    console.log(foundNote)
    document.querySelector("#note-id").value = foundNote.id
    document.querySelector("#note-text").value = foundNote.text
    document.querySelector("#note-criminal").value = foundNote.criminalId

})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
         const hiddenInputValue = document.querySelector("#note-id").value
         if (hiddenInputValue !== "") {
             editNote(
                 {
                     id: parseInt(hiddenInputValue),
                     text: document.querySelector("#note-text").value,
                     criminalId: parseInt(document.querySelector("#note-criminal").value),
                     timestamp: new Date(Date.now()).toLocaleDateString()
                 }
             ) 
            document.querySelector(".note_button").innerHTML = `<button id="noteButton">Show Notes</button>`
             document.querySelector("#note-text").value = ""
             document.querySelector("#note-criminal").value = ""
         } else {
             const noteText = document.getElementById("note-text")
             const noteCriminalId = document.getElementById("note-criminal")
             if (noteText.value !== "" && noteCriminalId.value !== "0") {
                 const newNote = {
                     text: noteText.value,
                     criminalId: Number(noteCriminalId.value),  
                     timestamp: new Date(Date.now()).toLocaleDateString()
                    }           
                    saveNote(newNote)
                    noteText.value = ""
                    noteCriminalId.value = 0
                } else {
                    alert("Please fill out all fields before submitting!")
                }
            }
    }
})

export const NoteForm = () => {
  renderNoteForm()
}