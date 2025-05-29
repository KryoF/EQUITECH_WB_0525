import './App.css'

function App() {

  return (
    <>
      <div className='relative min-h-screen flex items-center justify-end'>
        <img 
          className='absolute -z-10 top-0 left-0 w-full h-full object-cover'
          src="https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        />
        <div className='bg-white/50 z-10'>

          <h1 className='text-white text-right text-7xl'>Soluciones innovadoras para el aceite</h1>
        </div>
      </div>
      <div className='h-screen'>
        <div className='bg-orange-400 py-6 my-2'>hola</div>
      </div>

    </>
  )
}

export default App
