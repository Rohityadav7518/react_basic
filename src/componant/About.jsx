import { useState } from "react"
import Paymentform from "./Paymentform"


function About() {

    const [count, setCount] = useState(0)

    let addValue = () => setCount(count + 1)
    let removeValue = () => setCount(count - 1)





    return (
        <>
            <div className=" bg-slate-950  text-center w-full justify-center items-center ">
                <h1 className="text-white ">  count: {count}  </h1> <br />
                <button className=" bg-green-400 px-3 py2 rounded-sm mb-3 text-white" onClick={addValue}>Add</button> <br />
                <button className=" bg-green-400 px-3 py2 rounded-sm mb-3 text-white" onClick={removeValue}> Sub</button>

                <div className="   m-auto flex justify-around  flex-wrap ">
                    <Paymentform name="rohit" btntext="call me" img={"https://images.pexels.com/photos/3064714/pexels-photo-3064714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
                    <Paymentform name="satyam" btntext="vist me  " img={"https://images.pexels.com/photos/27520303/pexels-photo-27520303/free-photo-of-a-woman-sitting-in-the-grass-holding-a-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
                    <Paymentform name="yashpal" btntext=" hover me " img={"https://images.pexels.com/photos/19223331/pexels-photo-19223331/free-photo-of-young-newlywed-couple-dancing-and-laughing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />




                </div>


            </div>
        </>)
}

export default About