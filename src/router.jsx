import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Sample from '@pages/Sample'
import FetchUse from '@pages/FetchUse'
import HighlightActiveNav from '@pages/HighlightActiveNav'
import MongoDB from '@pages/MongoDB'
import Go from '@pages/Go'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/sample', element: <Sample />, },
      { path: '/fetchuse', element: <FetchUse />, },
      { path: '/highlight-active-nav', element: <HighlightActiveNav />, },
      { path: '/mongodb', element: <MongoDB />, },
      { path: '/go', element: <Go />, },
    ],
  }
])

export default router