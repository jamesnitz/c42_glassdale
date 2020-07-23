import { useCriminals } from "./CriminalProvider.js"
import { criminalComponent } from "./Criminal.js"


const contentElement = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    const allCriminals = useCriminals()
    render(allCriminals)
}

const render = (criminalCollection) => {
      contentElement.innerHTML = `
      ${criminalCollection 
      .map(currentCriminal => {
        return criminalComponent(currentCriminal)
      }).join(" ")}
      `
}
