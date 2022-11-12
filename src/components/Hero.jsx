import React from 'react'


const Hero = () => {
  return (
    <div className="text-center mt-10 p-4"> 
        <h1 className='text-5xl text-black-600 font-bold'> Vote Without <span className='text-blue-600'>Rigging</span></h1>
        <p className='pt-5 text-gray-600 text-xl font-medium'> This online voting system offers the highest level of transparency, control, security <br></br>and efficiency of election processes using the <strong>Blockchain Technology</strong> </p>
        <div className='flex justify-center pt-10'>
            <div className='pr-5'>
            <button  type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Poll</button>
            </div>
        <div >
        <a href={<contestantform/>}> <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Join Poll</button></a>
        </div>

        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
          <div class="grid grid-cols-2 gap-4">
            
          <div class="form-group mb-6">
          <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="First name"/>
          </div>
          <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Last name"/>
      </div>
      


            </div>
            <div class="form-group mb-6">
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address"/>
    </div>
    <div class="mb-3 w-96">
    <input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
  </div>

          </form>

        </div>
        

        
        
        </div>
    </div>
  )
}

export default Hero