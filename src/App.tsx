import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/search'} element={<Search />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
