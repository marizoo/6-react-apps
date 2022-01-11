import React from 'react'
import styled from 'styled-components';
import LoginLogout from './01login-logout/LoginLogout';

const AppContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #1d1d1d;
color: white;
`

const App = () => {
  return (
    <AppContainer>
      <LoginLogout />
    </AppContainer>
  )
}

export default App

// https://www.youtube.com/watch?v=91qEdc6dSUs&list=WL&index=4
// minute 15