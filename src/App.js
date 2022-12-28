import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";

const App = () => {

  return (
    <>
      <Header />
      <section className="container" style={{position: "relative"}}>
        <Tasks />
      </section> 
    </>
  )
}

export default App;