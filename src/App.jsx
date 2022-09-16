import { Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import { Homepage } from './pages/homePage';
import { About } from './pages/aboutPage';
import { Blogpage } from './pages/blogPage';
import { Createpost } from './pages/createPost';
import { Editpost } from './pages/editPost';
import { Singlepage } from './pages/singlePage';
import { Notfoundpage } from './pages/notFoundPage';
import { Layout } from './components/layout'

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='about-us' element={<Navigate to='/about' replace />}/> {/* редирект без записи в историю браузера*/}
        <Route path='posts' element={<Blogpage/>}/>        
        <Route path='posts/:id' element={<Singlepage/>}/>
        <Route path='posts/:id/edit' element={<Editpost/>}/>
        <Route path='posts/new' element={<Createpost/>}/>
        <Route path='*' element={<Notfoundpage/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
