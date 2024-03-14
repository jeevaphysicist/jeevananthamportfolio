import React, { Fragment } from 'react'
import Header  from '../Header/Index';
import Card from './Card';




const Index = () => {
   

  return (
    <Fragment>
        <Header bgcolor="bg-[grey] border "/>
        <div className='mt-[120px]'>
            <div className='text-[30px] font-bold px-5 lg:px-10'>MY BLOGS</div>
            <div className='my-10 px-5 lg:px-10'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            </div>
        </div>
         
    </Fragment>
  )
}

export default Index