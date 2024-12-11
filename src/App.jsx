import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  

  return (
    <>
    <div className="rounded-t-2xl border-4 border-gray-300">
      <Header />
      <main className=" h-[400px] p-20">
        <Form />
      </main>
    </div>
    
    </>
  )
}

export default App
