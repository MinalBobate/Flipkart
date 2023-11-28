// import logo from './logo.svg';
import './App.css';
import ContextProvider from './contex/ContextProvider';
import DetailView from './components/details/DetailView'
//components
import Header from './components/header/Header'
import Home from './components/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box}from '@mui/material'
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Header />
      <Box style={{marginTop: '54px'}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<DetailView/>} />
        </Routes>
      </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
