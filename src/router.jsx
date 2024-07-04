import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Sample from '@pages/Sample'
import FetchUse from '@pages/FetchUse'
import HighlightActiveNav from '@pages/HighlightActiveNav'
import MongoDB from '@pages/MongoDB'
import Go from '@pages/Go'

import { goRoutes } from '@pages/Go/routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Sample />, index: true },
      { path: '/fetchuse', element: <FetchUse />, },
      { path: '/highlight-active-nav', element: <HighlightActiveNav />, },
      { path: '/mongodb', element: <MongoDB />, },
      {
        path: '/go',
        element: <Go />,
        children: goRoutes,
      },
    ],
    errorElement: <div>404 Not Found</div>,
  }
])

export default router