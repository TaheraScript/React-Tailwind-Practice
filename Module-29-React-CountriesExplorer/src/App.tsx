import { Suspense } from 'react'
import './App.css'
import type { CountryType } from './type/CountryType'
import Countries from './Countries/Countries'

 const countriesPromise= async() :Promise<CountryType[]>=>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await res.json()
  return data.countries
 }
function App() {
   
  

  return (
    <>
    <Suspense fallback ={<div>Loading...</div>}>
    <Countries countriesPromise={countriesPromise()}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
