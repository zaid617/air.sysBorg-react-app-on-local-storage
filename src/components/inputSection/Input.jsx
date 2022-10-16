
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

        if (textArr.length === 0) {
            return
        }
        else{
        let allow = window.confirm("Do You Want To Delete All Items ?");

        if (allow) {
            console.log("delete all");
            setTextArr([])
        }

        else{
            return
        }
    }
        
    }


    const deleteItem = (i)=>{
        console.log("item deleted");
        let updatedItem = textArr.filter((item, index) => {
            console.log(i);
            return index !== i
          })
          setTextArr(updatedItem)
    }


    return (
        <div className="container">

            
      <hr/>

        <form className='input' >
            <div className="inputs"><input type="text" placeholder='Class ID' className='height' /></div>

            <div className="inputs">

                <input type="text"  placeholder='Enter Any Text Or Link' onChange={(e)=>{setText(e.target.value)}} value={text} className='height Assignment' />

            <button className='height btn btn-primary' onClick={submitHandler}>Submit</button>
            </div>

            <div className="inputs">
                <button className='height btn btn-primary' onClick={deleteHandler}>Delete all</button>
            </div>
        </form>

        <hr />

        {
            textArr.map((elem,i)=>{
             return <MainSection 
                key={i}
                id={i}
                text={elem.text}
                date = {elem.date}
                delete = {deleteItem}
                />
            })
        }

        </div>
    )
}
