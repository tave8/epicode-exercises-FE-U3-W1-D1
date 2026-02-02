import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"

function App() {
  return (
    <>
      <ButtonComponent title="Hello Babe!" />
      <ButtonComponent title="Hello Babe!" />
      <ImageComponent url="https://placedog.net/200/300" altText="Cute dog" />
      <ImageComponent url="https://placedog.net/300/300" altText="Cute dog" />
      <ImageComponent url="https://placedog.net/300/250" altText="Cute dog" />

    </>
  )
}

export default App
