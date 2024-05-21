import {lightTheme} from './utils/Themes'
import {ThemeProvider, styled} from 'styled-components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Authentication from './pages/Authentication';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import { useSelector } from 'react-redux';
const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction: column;
background: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text_primary}
overflow-x: hidden;
transition: all 0.2s ease;`
;
function App() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {currentUser ?
          (<Container>
            
            <Navbar currentUser={currentUser}/>
            <Routes>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route exact path='/workouts' element={<Workout />} />
            </Routes>
          </Container>)
        :
          (<Container>
            <Authentication />
          </Container>)
      }
        
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App