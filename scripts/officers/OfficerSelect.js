import { getOfficers, useOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officer => `<option>${officer.name}</option>`).join("")
            }
        </select>
    `
}

export const officerSelect = () => {
  getOfficers().then(() => {
    const officers = useOfficers()
    render(officers)
  })
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: changeEvent.target.value
            }
        })
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})