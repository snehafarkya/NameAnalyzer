import React, {useState} from 'react'

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
  //  useEffect(() => {
  //   var first = document.getElementById('first').value;
  //     fetch(`https://api.genderize.io/?name=${first}`)
  //        .then((response) => response.json())
  //        .then((data) => {
  //           console.log(data);
  //           setPosts(data);
  //        })
  //        .catch((err) => {
  //           console.log(err.message);
  //        });
  //  }, []);
  return (
    <div className=' mx-auto w-[300px] md:w-[400px] my-20 bgg px-4 pb-8 rounded-xl border-4 border-double border-blue-100 hover:shadow-2xl  md:hover:scale-[1.2] hover:scale-[1.09] rotate-0 transition ease-in-out duration-1000'>
      <h2 className='name pt-4 pb-4 '>Name Analyzer</h2>

      <div >
      <div class="mb-6 ">
    <label for="first" class="block mb-2 text-sm font-semibold text-white">Firstname</label>
    <input type="text" id="first" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-pink-700 dark:focus:border-pink-500 focus:outline-none font-medium hover:scale-[1.03] transition ease-in-out duration-300 hover:shadow-md" placeholder="Write your first name" required />
  </div>  <div class="mb-6">
    <label for="last" class="block mb-2 text-sm font-semibold text-white">Lastname</label>
    <input type="text" id="last" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-pink-700 focus:outline-none dark:focus:border-pink-500 font-medium hover:scale-[1.03] transition ease-in-out duration-300 hover:shadow-md" placeholder="Write your last name" required />
  </div>
  {/* <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div> */}
  {/* <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div> */}
  {/* <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-300">Remember me</label>
  </div> */}
  <button type="submit" class="text-pink-700 hover:bg-pink-300 hover:text-white font-bold bg-pink-200 focus:ring-4 focus:outline-none focus:ring-pink-400 rounded-md text-sm w-max sm:w-auto px-5 py-2.5 text-center hover:scale-[1.03] transition ease-in-out duration-200 hover:shadow-md " onClick={handleClick} >Identify here</button>
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
