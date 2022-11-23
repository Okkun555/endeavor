import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { guestRoutes } from './routes/GuestRoutes';
import { AuthProvider } from './providers/auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={guestRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
