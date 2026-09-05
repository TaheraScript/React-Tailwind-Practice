import User from './components/promise-await'
import './App.css'
import type CountryType from './type/User-datatype';
import Countries from './components/promise-await';
//create a promise to load data
 const countriesPromise = async():Promise<CountryType[]> =>{
      const res = await fetch('https://openapi.programming-hero.com/api/all')
        const data = await res.json();
        return data.countries;
          }
function App() {
   
  

  return (
    <>
      <h2>Haapy family ever</h2>
      <Suspense fallback ={<div>Loading...</div>}>
      <Countries countriesPromies={countriesPromise}></Countries>

      </Suspense>
    </>
  )
}

export default App
