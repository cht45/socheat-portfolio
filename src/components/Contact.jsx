import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a0a0a] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c5c5c5] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <input className='border-2 border-[#fbfbfb] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 border-2 border-[#fbfbfb] rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='border-2 border-[#fbfbfb] rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </div>
  )
}
export default Contact