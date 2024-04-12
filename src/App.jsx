import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import {CartProvider} from'react-use-cart'
import Intro from './assets/components/Intro'
import { FaHouse } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiChefToque } from "react-icons/gi";
import Menu from './assets/components/Menu'
import Cart from './assets/components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <CartProvider>

      <BrowserRouter>

        <div className='flex '>

            <header className='sticky top-0 bg-orange-800 w-44 h-screen'>
              <nav className='grid p-6'>
                  <NavLink to='*' ><img src="./img/fast.png" alt="" className='w-96 rounded-full mb-11 animate-pulse'/></NavLink>
                  <h1 className='text-white font-bold underline text-2xl mb-9'>BetterTaste</h1>
                  <NavLink to='*' className='text-2xl font-serif hover:underline hover:text-blue-200 duration-500 ease-in-out flex'><FaHouse /> Home</NavLink>
                  <NavLink to='/menu' className='text-2xl font-serif hover:underline hover:text-blue-200 duration-500 ease-in-out flex'><GiChefToque /> Menu </NavLink>
                  <NavLink to='/cart' className='text-2xl font-serif hover:underline hover:text-blue-200 duration-500 ease-in-out flex'> <IoFastFood /> Plate</NavLink>
              </nav>
            </header>

            <div>

                <main>
                <Routes>

                  <Route path='*' element={<Intro />} />
                  <Route path='/menu' element={<Menu />} />
                  <Route path='/cart' element={<Cart />} />

                </Routes>
                </main>

            </div>

        </div>
        

        

      </BrowserRouter>
    </CartProvider>
      
    </>
  )
}

export default App
