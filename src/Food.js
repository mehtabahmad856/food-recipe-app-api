import axios from 'axios'
import React,{useState} from 'react'
import './Food.css';
import cake from './images/cake.jpg'
import shop from './images/shop.jpg'
const Food = () => {

    const [query,setQuery] = useState('')
    const [rcp,setRcp] = useState([])
    const [list,setList] = useState('alcohol-free')

    const YOUR_APP_ID ='3ef14ef6'
    const YOUR_APP_KEY ='e6b0b9ce81b904d251a95e30dd7fd2b9'


    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`

    async function getRecipe(){
       const result = await axios.get(url)
       setRcp(result.data.hits)
       console.log(result.data);
    }

    const submitForm = e =>{
        e.preventDefault();
        getRecipe();
    }

  return (
    <div className='App'>


      <div className="header">
        <nav className='nav'>
          <div className="logo">
            <img src={cake} alt="" className='img-1'/>
          </div>
          <ul className='ul'>
            <li><a href='#'>Sponsers</a></li>
            <li><a href='#'>Customers</a></li>
            <li><a href='#'>Meals</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
       
        <form className='form_1' onSubmit={submitForm}>
          <input type="text" placeholder='enter name of product' value={query} onChange={e=>setQuery(e.target.value)} />
          <button type='submit' className='button-1'>Enter</button>

        </form>

        </nav>
      



        <div>

          <div className='text'>
            <h1><span className='span-h1'>Fastest Delivery </span>On Earth</h1>
            <p>Feel The   <span>Taste</span></p>

          </div>

        <div className='print'>

          {rcp.map((item,index) =>{
            return (
              <div key={index} className='product'>
                <img src={item['recipe']['image']} alt="" />
                <p><span>name : </span>{item['recipe']['label']}</p>
                <p><span>calorie : </span>{item['recipe']['calories'].toFixed(2)}</p>
                <div className='buttons'>
                  <p>{<a className='a-2' href={item['recipe']['url']}>Read</a>}</p>
                  <button className='button-2'>Order</button>
                </div>
              </div>
            )
          })}
         </div>

        </div>

        </div>
        
        
        </div>
  )
}

export default Food;