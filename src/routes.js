import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//

import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';

import ProductsPage from './pages/Categories';
import DashboardAppPage from './pages/DashboardAppPage';
import CategoryForm from './components/CategoryForm/CategoryForm';
import CategoryForm2 from "./components/CategoryForm/CategoryForm2"

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'categoryform', element: <CategoryForm/> },
        { path: 'categoryform2', element: <CategoryForm2/> },
        { path: 'products', element: <ProductsPage /> },
       
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
      
      ],
    },
  
  ]);

  return routes;
}
