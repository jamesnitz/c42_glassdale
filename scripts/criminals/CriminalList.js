import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { criminalComponent } from "./Criminal.js"


const contentElement = document.querySelector(".criminalsContainer")

export const criminalList = () => {
  getCriminals().then(() => {
    const allCriminals = useCriminals()
    render(allCriminals)
    
  })  
      const render = (criminalCollection) => {
        contentElement.innerHTML = `
        ${criminalCollection 
          .map(currentCriminal => {
            return criminalComponent(currentCriminal)
          }).join(" ")}
          `
        }
}