import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import ShowInfo from './containers/ShowInfo/ShowInfo';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/search'} element={<Search />}/>
          <Route path={'/shows/:id'} element={<ShowInfo />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
