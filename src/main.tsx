/*
  TO DO:
  - Rethink the language state management, is it necessary to use Redux?
  - Change the language toggle button to a dropdown menu
  - Start with the structure of the mainpage
  - How to do multiple indexes in a React application?
*/



import './index.css'
import './utils/i18n/index.ts'
import { Provider } from 'react-redux'
import {store} from './state/store.ts'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import ReactDOM  from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import TestPage from './pages/TestPage.tsx';
import WindowSizeListener from './utils/WindowSizeListener.tsx';
import WindowScroller from './utils/WindowScroller.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WindowSizeListener/>
    <BrowserRouter>
      <WindowScroller/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path= '/projects' element={<ProjectsPage/>}/>
        <Route path='/test' element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);


