import './App.css'
import Welcome from './components/Welcome'

function App() {

  return (
    <section className='text-center p-5 flex flex-col items-center justify-center gap-5 text-white'>
      <h1 className='font-bold text-4xl mb-5'>Quiz Programação</h1>
      <Welcome />
    </section>
  )
}

export default App
