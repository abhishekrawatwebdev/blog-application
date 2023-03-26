import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader';
import MainSection from './main-section'

const Home = () => {
  const [isLoading,setIsLoading] = useState(true);
useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
},[])

  return (
    isLoading ? <Loader /> :
    <div>
      <MainSection setIsLoading={setIsLoading} />
    </div>
  )
}

export default Home