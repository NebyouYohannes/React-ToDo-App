import './Form.css'
export default function Form(){
    return(
        <>
        <div className='container'>
            <img className='logo' src="./src/noteicon.png" alt="Logo" /> <br />
            
        <input className="input" type="text" /> <br />
        <button className="btn">ADD</button>
        <h2>No Task</h2>
        </div>
        </>
    )
}