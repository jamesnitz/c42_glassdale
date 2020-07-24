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