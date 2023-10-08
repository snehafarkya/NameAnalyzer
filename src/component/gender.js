import React, {useState} from 'react'
import Upload from './Upload';

export default function Gender() {
  const [posts, setPosts] = useState([]);
  const [prob , setProb] = useState([])
  const [show, setShow] = useState(false)
  const handleClick  = (e) =>{
    e.preventDefault();
    var first = document.getElementById('first').value;
    if(first){
    setShow(true)

    }
    // console.log(first)
      fetch(`https://api.genderize.io/?name=${first}`)
         .then((response) => response.json())
         .then((data) => {
            // console.log(data.gender);
            // console.log(data.probability)
            setPosts(data.gender);
            setProb(data.probability)
         })
         .catch((err) => {
            console.log(err.message);
         });
  }
  return (
    <div className=' mx-auto w-[340px] md:w-[400px] my-20 bgg px-4 pb-8 rounded-xl border-4 border-double border-blue-100 hover:shadow-2xl  rotate-0 transition ease-in-out duration-700'>
      <h2 className='name pt-4 pb-4 '>Gender Analyzer</h2>
      <Upload/>
      <div >
      <div class="mb-6 ">
    <label for="first" class="block mb-2 text-sm font-semibold text-white">Firstname</label>
    <input type="text" id="first" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-pink-700 dark:focus:border-pink-500 focus:outline-none font-medium hover:scale-[1.03] transition ease-in-out duration-300 hover:shadow-md" placeholder="Write your first name" required />
  </div>  <div class="mb-6">
    <label for="last" class="block mb-2 text-sm font-semibold text-white">Lastname</label>
    <input type="text" id="last" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-pink-700 focus:outline-none dark:focus:border-pink-500 font-medium hover:scale-[1.03] transition ease-in-out duration-300 hover:shadow-md" placeholder="Write your last name" required />
  </div>
  <button type="submit" class="text-pink-700 hover:bg-gradient-to-r from-blue-500  hover:text-blue-900 font-bold bg-pink-200 focus:ring-4 focus:outline-none focus:ring-pink-400 rounded-md text-sm w-max sm:w-auto px-5 py-2.5 text-center  transition ease-in-out duration-700 hover:shadow-md " onClick={handleClick} >Identify here</button>
  {show ? (
    <>
  <p className='text-white text-base my-4'>Your Gender is 💙💗: <span className='uppercase font-bold'>{posts}</span> </p>
  <p className='text-white text-base'>The probability of your Gender is: <span className='uppercase font-bold'>{prob}</span></p>
  </>
  ):null}

</div>

 

    </div>
  )
}
