import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Component/Products'
import NotFound from './Component/NotFound'
import NavigationBar from './Component/NavigationBar'



function App() {
 
  return (
    <>
    <NavigationBar />

    <Routes>

    <Route path="/products" element={<Products/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </>
    
  );
}

export default App;