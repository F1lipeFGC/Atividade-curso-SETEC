import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function Title({ name, paragrafo }) {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}</h1>
      {paragrafo ?
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt accusantium porro iure fuga repellendus
          perferendis natus expedita quo minima voluptas minus reiciendis accusamus quos reprehenderit, excepturi quod error asperiores dicta.</p>
        : <p>Nao tem paragrafo</p>
    }
    </>
  )
}

export default Title
