const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".note_button")

eventHub.addEventListener("click", event => {
    if (event.target.id === "noteButton") {
      console.log("noteButtonClicked")
      const showNotes = new CustomEvent("noteButtonClicked")
      eventHub.dispatchEvent(showNotes)
      contentTarget.innerHTML =  `
      <button id="noteFormButton">Show Form</button>
      `
    }
  })
  eventHub.addEventListener("click", event => {
    if (event.target.id === "noteFormButton") {
      console.log("noteFormButtonClicked")
      const showForm = new CustomEvent("noteFormButtonClicked")
      eventHub.dispatchEvent(showForm)
      contentTarget.innerHTML =  `
         <button id="noteButton">Show Notes</button>
      `
    }
})

export const NoteButton = () => {
    contentTarget.innerHTML = `
        <button id="noteButton">Show Notes</button>
    `
}