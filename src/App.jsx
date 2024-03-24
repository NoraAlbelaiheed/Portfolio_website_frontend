
import { Routes,Route } from 'react-router-dom'
import BlogsPage from './routes/blogsPage'
import WorkDetail from './routes/workDetail'
import Works from './routes/works'
import Home from './components/Home'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
     <Home/>
    </MantineProvider>
  )
}

export default App
