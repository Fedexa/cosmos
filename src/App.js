import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ScrollToTop from '../../cosmos/src/components/UI/ScrollToTop';
import HomePage from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Rules from './pages/Rules';
import Characters from './pages/Characters';
import RootLayput from './pages/RootLayout';
import ErrorPage from './pages/Error';
import './App.css';
import CharacterDetails from './pages/CharactersDetails';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayput />, errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'rules', element: <Rules /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:saintsId', element: <CharacterDetails /> },
    ]
  },
])

function App() {
  return (
    <Box m='auto'>
      <RouterProvider router={router}>
      <ScrollToTop />
      </RouterProvider>
    </Box>
  );
}

export default App;
