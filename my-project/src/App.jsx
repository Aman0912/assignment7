import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import './App.css'
import Carts from './Body'
import Head from './Head'
import SetCook from './SetCook';



function App() {
  const [foodList, foodFunction]= useState([])
  useEffect(()=>{
    fetch('./food.json')
    .then(res=>res.json())
    .then(data=>foodFunction(data))

  },[]);


  const [cookHere, setTheList] = useState([])

  const sentToCook = (item) =>{
    const ifExist = cookHere.find( line => line.recipe_id == item.recipe_id);
    if (!ifExist){
      setTheList([...cookHere, item]);
    }
    else{
      toast('Already existed food')
    }
  }
  const [Cooked, CurrentCook] = useState([]);

  const deleteIt = item => {
    const newWantToCook = cookHere.filter( iteam => iteam.recipe_id != item.recipe_id);
    setTheList(newWantToCook);
    CurrentCook([...Cooked, item])
    console.log(Cooked)
  }

  return (
    <>
    <Head></Head>
    <div className="mt-24">
            <h2 className="text-center text-5xl font-semibold text-[#150B2B]">Our Dishes</h2>
            <p className="text-center mt-6 text-[#150b2b99] font-normal text-[16px] mb-11">Experience a new authentic bangali food from us. In here you will get food in reasonable price. So, dont waste anytime. Come and enjoy dear.</p>

            
        </div>
        <ToastContainer />
      <div className='flex gap-4 justify-between'>
      <div className="grid grid-cols-2 w-6/10 gap-2">
          {
            foodList.map(foodItem => <Carts food={foodItem} key={foodItem.recipe_id} sentToCook={sentToCook} deleteIt={deleteIt}></Carts>)
          }
        </div>
        <div className='flex-1 border-2 py-8 rounded-2xl'>

        <SetCook SetToCook={cookHere} deleteIt={deleteIt} Cooked={Cooked} ></SetCook>
        </div>
        
      </div>



    </>
  )
}

export default App
