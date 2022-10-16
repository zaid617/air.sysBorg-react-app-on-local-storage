
import { useState } from "react"
import MainSection from "../mainSection/MainSection"
import "./Input.css"

export default function Input() {
    
    let [date, setDate] = useState({})
    let [text , setText] = useState("");
    let [textArr , setTextArr] = useState([]);

    const submitHandler = (e)=>{

        e.preventDefault();
        console.log("submit");
        setDate(new Date());

        if (!text) {
            return
        }
        else{

            setTextArr([...textArr, {text , date}]);
            setText("");
            setDate({});
        }
    }

    const deleteHandler = (e)=>{
        e.preventDefault();
        console.log("delete all");
        setTextArr([])
    }

    return (
        <div className="container">

        <form className='input' >
            <div className="inputs"><input type="text" placeholder='Class ID' className='height' /></div>

            <div className="inputs">

                <input type="text"  placeholder='Enter Any Text Or Link' onChange={(e)=>{setText(e.target.value)}} value={text} className='height Assignment' />

            <button className='height btn btn-primary' onClick={submitHandler}>Submit</button>

            <input readOnly type={"buttun"} className='height btn btn-sec' value={"img"} />
            </div>

            <div className="inputs">
                <button className='height btn btn-primary' onClick={deleteHandler}>Delete all</button>
            </div>
        </form>

        {
            textArr.map((elem,i)=>{
             return <MainSection 
                key={i}
                id={i}
                text={elem.text}
                date = {elem.date}
                />
            })
        }

        </div>
    )
}
