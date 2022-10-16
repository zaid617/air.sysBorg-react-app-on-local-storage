
import "./Input.css"

export default function Input(props) {
    
  



    return (
        <div className="container">

        <form className='input'>
            <div className="inputs"><input type="text" placeholder='Class ID' className='height' /></div>
            <div className="inputs"><input type="text"  placeholder='Enter Any Text Or Link' className='height Assignment' /><button className='height btn btn-primary'>Submit
            </button><input readOnly type={"buttun"} className='height btn btn-sec' value={"img"} />
            </div>
            <div className="inputs"><button className='height btn btn-primary'>Delete all</button></div>
        </form>
        
        </div>
    )
}
