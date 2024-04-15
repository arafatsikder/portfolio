import About from './Component/About/About'
import NavHeader from './Component/NavHeader/NavHeader'
import Skills from './../src/Component/Skills/Skills'
import MyWork from './Component/MyWork/MyWork'
import Hire from './Component/Hire/Hire'
// import Show from './Component/Show/Show'
function App() {

  return (
    <>
      <div className='z-10000'>
      <NavHeader></NavHeader>
      </div>
      <About></About>
      <Skills></Skills>
      <MyWork></MyWork>
      <Hire></Hire>
      {/* <Show></Show> */}

    </>
  )
}

export default App
