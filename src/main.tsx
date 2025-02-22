/*
  TO DO:
  - Rethink the language state management, is it necessary to use Redux?
  - Change the language toggle button to a dropdown menu
  - Start with the structure of the mainpage
  - How to do multiple indexes in a React application?
*/


import ReactDOM  from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import './utils/i18n/index.ts'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import TestPage from './pages/TestPage.tsx';
import { Provider } from 'react-redux'
import {store} from './state/store.ts'
import WindowSizeListener from './utils/WindowSizeListener.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path:'/projects',
    element: <ProjectsPage />
  },
  {
    path: '/test',
    element: <TestPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WindowSizeListener/>
    <RouterProvider router={router}/>
  </Provider>
);


