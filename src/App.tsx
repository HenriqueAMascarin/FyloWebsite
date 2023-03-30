import EarlySection from "./components/EarlySection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PrincipalSection from "./components/PrincipalSection"
import ProductiveSection from "./components/ProductiveSection"

function App() {

  return (
    <>
      <Header/>
      <main>
        <PrincipalSection/>
        <ProductiveSection/>
        <EarlySection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
