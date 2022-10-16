
import { useState } from "react"
import MainSection from "../mainSection/MainSection"
import "./Input.css"

export default function Input() {

    let takeNote = localStorage.getItem("newNote");
    let newNote = JSON.parse(takeNote) || [] ;
    let [date, setDate] = useState("")
    let [text , setText] = useState("");
    let [textArr , setTextArr] = useState(newNote);
    
//   useEffect(()=>{
//     setTextArr(newNote)

//   },[])
    

    const submitHandler = (e)=>{

        e.preventDefault();
        console.log("submit");
        
        if (!text) {
            return
        }
        
        else{
            
            let dates = new Date();
            dates = dates.getTime();
            setDate(dates);
            setTextArr([...textArr, {"text": text , "date" : date}]);
            let localArr = textArr
            localStorage.setItem("newNote", JSON.stringify(localArr))
            setText("");
            setDate("");
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
            localStorage.removeItem("newNote")
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
          localStorage.removeItem("newNote")
          localStorage.setItem(JSON.stringify("newNote",textArr))
    }


    return (
        <div className="container">

            
      <hr/>

        <form className='input' >
            <div className="inputs"><input type="text" placeholder='Class ID' className='height first-input' /></div>

            <div className="inputs">

                <input type="text"  placeholder='Enter Any Text Or Link' onChange={(e)=>{setText(e.target.value)}} value={text} className='height Assignment' />

            <button className='height btn btn-primary m-l3' onClick={submitHandler}>Submit</button>
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
