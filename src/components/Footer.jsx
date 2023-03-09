import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white h-[200px] w-[100%] text-black grid grid-cols-[4fr_1fr] p-[2rem]">
      <div className="flex flex-col justify-center">
        <h1 className="[font:700_2rem_white] uppercase text-[#5853ff]">Techystar</h1>
        <p className="[font:500_1.2rem_Roboto]">&copy;all right reserved</p>
      </div>
      <div>
        <h5 className="[font:300_2rem_Roboto] m-[1rem_0] text-center">Follow Us</h5>
        <div className="flex flex-col items-center">
          <a className="text-black [font:900_1rem_cursive] hover:text-[#5853ff]" href="https://youtube.com" target={"blank"}>Youtube</a>
          <a className="text-black [font:900_1rem_cursive] hover:text-[#5853ff]" href="https://instagram.com" target={"blank"}>Instagram</a>
          <a className="text-black [font:900_1rem_cursive] hover:text-[#5853ff]" href="https://github.com" target={"blank"}>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;