import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  

  return (
    <>
    <div className="md:min-w-[800px] rounded-t-2xl border-4 border-gray-300 w-[80%] mx-auto">
      <Header />
      <main className="p-20 ">
        <Form />
      </main>
      
    </div>
    
    </>
  )
}

export default App
