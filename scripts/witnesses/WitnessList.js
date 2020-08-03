import { useWitnesses, getWitnesses } from "./WitnessDataProvider.js";
import { witnessComponent } from "./Witness.js";

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.id === "witnessButton") {
    render()
    const customEvent = new CustomEvent("witnessButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

const render = () => {
 getWitnesses().then(() => {
  const witnesses = useWitnesses()
  contentElement.innerHTML = `
    ${witnesses 
      .map(witness => {
        return witnessComponent(witness)
      }).join(" ")}
  `
 })
}