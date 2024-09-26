import { Button } from "./components/ui/button"

function App() {


  return (
    <div className=" flex flex-row">
      <div className="basis-1/4">01</div>
      <div className="basis-1/4">02</div>
      <div className="basis-1/2">03</div>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

export default App
