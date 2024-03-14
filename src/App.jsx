import { Fragment, Suspense, lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=>import(`./Components/Home/Index`));
const Blog = lazy(()=>import(`./Components/Blog/Index`));
const SingleBlog = lazy(()=>import(`./Components/Blog/SingleBlog`));

function App() {

  return (
    <Fragment>
      <Suspense fallback={<div className='h-[100vh] w-[100%] flex items-center justify-center text-[30px] font-bold'>Loading...</div>}>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/:id" element={<SingleBlog/>}/>
           </Routes>
      </Suspense>
    </Fragment>
  )   
}

export default App
