import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#090c31] rounded-[0_0_200px_200px]" id="home">
        <div className="before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-no-repeat before:bg-center before:bg-auto before:bg-custom before:rounded-[0_0_200px_200px] before:blur-[2px] before:bg-star"></div>

        <main className="absolute uppercase flex flex-col items-end w-full h-full p-8 justify-center">
          <h1 className="font-Roboto text-6xl font-normal text-white">
            Techystar
          </h1>
          <p className="text-lg font-bold text-white">
            Solution to all your Problems
          </p>
        </main>
      </div>
      <div className="home2 w-full h-screen bg-[#090c31] flex py-[500px] px-0 justify-center items-center -mt-[200px]">
        <img className="w-[30%] animate-[imgUp_0.7s_linear_infinite_alternate]" src={vg} alt="Graphics" />
        <div className="w-[50%] flex flex-col justify-center items-center p-20 h-screen">
          <p className="text-white tracking-[2px] font-thin text-xl font-[cursive]">
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3 w-full h-[120vh] bg-[#090c31] -mt-[200px] flex" id="about">
        <div className="w-[70%] h-screen bg-white rounded-[0_200px_200px_0] flex flex-col items-center justify-center p-[2rem]">
            <h1 className="uppercase border-b-[2px] border-solid border-black p-[0.5rem] w-[15rem] text-black">Who we are?</h1>
            <p className="p-[5rem] tracking-[1px] leading-[150%] italic font-[cursive] font-thin text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe</p>
        </div>
      </div>

      <div className="home4 w-[100%] h-[100vh] bg-[#090c31] flex justify-end" id="brands">
        <div className="bg-[#5853ff] rounded-[200px_0_0_200px] w-[70%] h-[70vh] p-[2rem] flex flex-col items-center justify-center">
            <h1 className="text-white uppercase w-[140px] border-b-[2px] border-solid border-white p-[0.5rem]">Brands</h1>

            <article className="flex flex-wrap m-[2rem_0] justify-center">
            <div className="brands [animation-delay:0.3s]">
                    <AiFillGoogleCircle className="text-[4rem]"/>
                    <p className="font-[900] text-[1.2rem] font-[cursive]">Google</p>
                </div>
                <div className="brands [animation-delay:0.5s]">
                    <AiFillAmazonCircle className="text-[4rem]"/>
                    <p className="font-[900] text-[1.2rem] font-[cursive]">amazon</p>
                </div>
                <div className="brands [animation-delay:0.7s]">
                    <AiFillYoutube className="text-[4rem]"/>
                    <p className="font-[900] text-[1.2rem] font-[cursive]">Youtube</p>
                </div>
                <div className="brands [animation-delay:1s]">
                    <AiFillInstagram className="text-[4rem]"/>
                    <p className="font-[900] text-[1.2rem] font-[cursive]">Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
