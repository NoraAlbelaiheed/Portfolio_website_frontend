
import { Routes,Route } from 'react-router-dom'
import BlogsPage from './routes/blogsPage'
import WorkDetail from './routes/workDetail'
import Works from './routes/works'
import Home from './components/Home'

function App() {

  return (
    <>

      <Home/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
        <Route path='/workdetail' element={<WorkDetail/>}/>
        <Route path='/Works' element={<Works/>}/>
      </Routes> */}
    </>
  )
}

export default App
