import Home from './Home'
import Arrays from './Arrays'
import Slices from './Slices'
import Maps from './Maps'
import Range from './Range'
import Functions from './Functions'
import MultipleReturnValues from './MultipleReturnValues'
import VariadicFunctions from './VariadicFunctions'
import Closures from './Closures'
import Recursion from './Recursion'
import Pointers from './Pointers'

export const goRoutes = [
  { path: '/go/', element: <Home />, },
  { path: '/go/arrays', element: <Arrays />, },
  { path: '/go/slices', element: <Slices />, },
  { path: '/go/maps', element: <Maps />, },
  { path: '/go/range', element: <Range />, },
  { path: '/go/functions', element: <Functions />, },
  { path: '/go/multiple-return-values', element: <MultipleReturnValues />, },
  { path: '/go/variadic-functions', element: <VariadicFunctions />, },
  { path: '/go/closures', element: <Closures />, },
  { path: '/go/recursion', element: <Recursion />, },
  { path: '/go/pointers', element: <Pointers />, },
]