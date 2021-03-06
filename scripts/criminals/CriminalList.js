import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { criminalComponent } from "./Criminal.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
  const allCriminals = useCriminals()
  if (event.detail.crimeThatWasChosen === "0") {
    render(allCriminals)
  } else{
    const filteredCrminals = allCriminals.filter(criminal => criminal.conviction === event.detail.crimeThatWasChosen)
    render(filteredCrminals)
  }
})

eventHub.addEventListener('officerSelected', event => {
    const criminals = useCriminals()

    if(event.detail.officer !== "0"){

        const matchingCriminals = criminals.filter(criminal => criminal.arrestingOfficer === event.detail.officer)
        render(matchingCriminals)
    } else {
        render(criminals)
    }
})

eventHub.addEventListener("click", event => {
  if (event.target.id === "witness_criminal_Button") {
    const allCriminals = useCriminals()
    render(allCriminals)
    const customEvent = new CustomEvent("witness_Criminal_ButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

export const criminalList = () => {
  getCriminals().then(() => {
    const allCriminals = useCriminals()
    render(allCriminals)
  })         
}

const render = (criminalCollection) => {
  contentElement.innerHTML = `
  ${criminalCollection 
    .map(currentCriminal => {
      return criminalComponent(currentCriminal)
    }).join(" ")}
    `
}