/*
  TO DO:
  - Rethink the language state management, is it necessary to use Redux?
  - Change the language toggle button to a dropdown menu
  - Start with the structure of the mainpage
  - How to do multiple indexes in a React application?
*/



import './index.css';
import './utils/i18n/index.ts';
import { Provider } from 'react-redux';
import {store} from './state/store.ts';
import {createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider } from 'react-router-dom';
import {Route} from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import RootLayout from './layout/RootLayout/RootLayout.tsx';
import HomePage from './pages/Home/HomePage.tsx';
import AboutPage from './pages/About/AboutPage.tsx';
import ProjectsPage from './pages/Projects/ProjectsPage.tsx';
import ProjectsBlogPage from './pages/ProjectsBlog/ProjectsBlogPage.tsx';
import TestLayout from './layout/TestLayout/TestLayout.tsx';
import TestPage from './pages/Test/TestPage.tsx';
import NotFound from './pages/NotFound/NotFoundPage.tsx';
import WindowSizeListener from './utils/WindowSizeListener.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='projects'>
        <Route index element={<ProjectsPage/>}/>
        <Route path=':title' element={<ProjectsBlogPage/>}/>
      </Route>
      <Route path='test' element={<TestLayout/>}>
        <Route index element={<TestPage/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WindowSizeListener/>
    <RouterProvider router={router}/>
  </Provider>
);


