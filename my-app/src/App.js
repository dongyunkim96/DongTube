import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import { AppContext } from './context/contextApi';
import ErrorComponent from './shared/ErrorComponent';


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <div className='flex flex-col h-full'>
        <RouterProvider router={appRouter} />
      </div>
    </AppContext>
  );
}

export default App;
