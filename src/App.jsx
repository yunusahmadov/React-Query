import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import {ReactQueryDevtools} from 'react-query/devtools'
import './App.css';
import HomePage from './components/HomePage';
import Navigatoin from './components/Navigatoin';
import RQSuperHeroesPage from './components/RQSuperHeroesPage';
import SuperHeroesPage from './components/SuperHeroesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigatoin/>
        <Routes> 
          <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
