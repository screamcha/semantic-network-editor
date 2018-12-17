/* global FileReader */
export const readJSON = (input, callback) => {
  const file = input.files[0]
  const reader = new FileReader()

  reader.onload = () => callback(JSON.parse(reader.result))

  reader.readAsText(file)
}
