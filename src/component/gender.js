import React, {useState} from 'react'

export default function Gender() {
  const [posts, setPosts] = useState([]);
  const [prob , setProb] = useState([])
  const handleClick  = (e) =>{
    e.preventDefault();
    var first = document.getElementById('first').value;
    console.log(first)
      fetch(`https://api.genderize.io/?name=${first}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data.gender);
            console.log(data.probability)
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
    <div className=' mx-auto w-[400px] my-20 '>
      

      <div>
      <div class="mb-6">
    <label for="first" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your firstname</label>
    <input type="text" id="first" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>  <div class="mb-6">
    <label for="last" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your lastname</label>
    <input type="text" id="last" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick} >Submit</button>
  <p className='text-white text-base'>Your Gender is🚺🚹: {posts}</p>
  <p className='text-white text-base'>The probability of your Gender is: {prob}</p>


</div>

 

    </div>
  )
}
