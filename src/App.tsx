import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/Browse';
import SearchDetails from './pages/SearchDetails';
import CategoryDetails from './pages/CategoryDetails';
import RecipeDetails from './pages/RecipeDetails';
// import RecipeDetails from './pages/RecipeDetails';
// import CategoryDetails from './pages/CategoryDetails';
// import SearchDetails from './pages/SearchDetails';
function App() {
  return (
    <Router
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
    >
      
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<SearchDetails />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
        <Route path="/category/:slug" element={<CategoryDetails />} /> 
      </Routes>
    </Router>
  )
}

export default App