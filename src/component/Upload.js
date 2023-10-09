import React, { useState } from "react";

function Upload() {
	const [file, setFile] = useState();
  const [show, setShow] = useState(true)
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
    setShow(false)
	}

	return (
		<div className="App">
			{/* <h2>Add Image:</h2>
			<input type="file" onChange={handleChange} accept="image/*" />
			<img src={file} className="w-[50%]"/> */}


{show?(
      <div class="flex items-center justify-center w-full mb-6">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload your picture</span> or drag & drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP</p>
        </div>
        <input id="dropzone-file" type="file" onChange={handleChange} accept="image/*" className="hidden"/>
    </label>
</div> 
):
<div className="flex justify-center">
  <a href={file} download={true}>
    <img src={file} className="h-[200px] rounded-lg mb-6 shadow-xl"/>
  </a>
</div>
}

		</div>

	);
}

export default Upload;

