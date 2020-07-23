import { useConvictions,getConvictions } from "./ConvictionsProvider.js";
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const convictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions()
    render(convictions)
  })

  const render = convictionsCollection => {
          contentTarget.innerHTML = `
          <select class="dropdown" id="crimeSelect">
              <option value="0">Please select a crime...</option>
              ${
                  convictionsCollection.map(crime => {
                    return `<option>${crime.name}</option>`
                  }).join()
              }
          </select>
      `
  }
}