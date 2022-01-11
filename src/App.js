import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailForm from './components/DetailForm';
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Main />} />
      <Route path="/detail/:id" index element={<DetailForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
