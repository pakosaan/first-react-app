import React from 'react'

const Contact = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#090c31] flex justify-center items-center'>
        <main className='bg-white h-[40rem] w-[70%] p-[3rem] rounded-[0_200px_200px_0]' >
            <h1>Contact Us</h1>
            <form className='m-[5rem] flex flex-col items-center justify-center' >
                <div className='h-[3rem] flex items-center justify-center w-[60%] m-[0.5rem]' >
                    <label className='[font:400_1.2rem_white] w-[20%] m-[0_1rem]'>Name</label>
                    <input className='self-stretch w-[80%] p-[1rem] rounded-[5px] [border:1px_solid_rgba(123,123,123,0.6)] [outline:none]' type="text" required placeholder='Abc' />
                </div>
                <div className='h-[3rem] flex items-center justify-center w-[60%] m-[0.5rem]'>
                    <label className='[font:400_1.2rem_white] w-[20%] m-[0_1rem]'>Email</label>
                    <input className='self-stretch w-[80%] p-[1rem] rounded-[5px] [border:1px_solid_rgba(123,123,123,0.6)] [outline:none]' type="email" required placeholder='Abc@xyz.com' />
                </div>
                <div className='h-[3rem] flex items-center justify-center w-[60%] m-[0.5rem]'>
                    <label className='[font:400_1.2rem_white] w-[20%] m-[0_1rem]'>Message</label>
                    <input className='self-stretch w-[80%] p-[1rem] rounded-[5px] [border:1px_solid_rgba(123,123,123,0.6)] [outline:none]' type="text" required placeholder='Tell us about your query...' />
                </div>
                <button className='p-[0.7rem] m-[3rem 0] [border:none] rounded-[5px] bg-[#5853ff] text-white w-[200px] [font:500_1rem_white] hover:opacity-[0.9]' type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;