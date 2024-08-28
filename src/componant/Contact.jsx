import React, { useState } from 'react'

function Contact() {


    const [color, setColor] = useState("olive")

    return (
        <>
            <div className="bg-slate-950  relative w-full h-screen  text-white duration-200 " style={{ backgroundColor: color }}>
                <div className=" flex flex-wrap  absolute justify-center bottom-12 inset-x-0 px-2   ">
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "red" }}  > Red</button> </div>
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "green" }}  > Green</button> </div>
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "yellow" }}  > yellow</button> </div>
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "black" }}  > black</button> </div>
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "purple" }}  > purple</button> </div>
                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl ">    <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "orange" }}  > orange</button> </div>
                </div>
            </div>
        </>)
}

export default Contact