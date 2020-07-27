import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    getCriminals().then(() => {
        const criminalsCollection = useCriminals()
        
        contentTarget.innerHTML = `
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
        
        <button id="saveNote">Save Note</button>
        `
    })
}

export const NoteForm = () => {
  render()
}