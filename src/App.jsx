
import './App.css'
import { useState } from 'react';


function HomePage() {
  return (
    <>
      <h1>home</h1>
      <p>esta es una pagina de ejemeplo para desde zero</p>
      
      <a href="/about">ir a sobre nosotros</a>
    </>
  )
}


function AboutPage() {
  return (
    <>
      <h1>about</h1>
      <div>
        <img src="https://picsum.photos/600/300" alt="images random" />
      </div>
      <p>hola estoy creando clon</p>
      <a href="/">ir a home</a>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)


  return (
    <main>
      {currentPath == '/' && <HomePage />}
      {currentPath == '/about' && <AboutPage />}

    </main>
  );
}


export default App
