import logo from './logo.svg';
import './App.css';
import ProductForm from './pages/CreateProduct';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import ProductTable from './pages/ProductTable';
import MyEditor from './pages/MyEditor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<ProductForm update={false} />} />
        <Route path='/update' element={<ProductForm update={true} />} />
        <Route path='/datatable' element={<ProductTable />} />
        <Route path='/editor' element={<MyEditor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
