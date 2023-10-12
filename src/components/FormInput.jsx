import "./formInput.css"

const FromInput = () => {
    return (
        <div className="formInput">
            
            <label >Username : </label>
            <input type="text" placeholder="Enter username"/>

            <label >Email : </label>
            <input type="text" placeholder="Enter Email" />

            <label >Password : </label>
            <input type="text"  placeholder="Enter Password"/>

            <button type="submit">Submit</button>

        </div>
    )
}

export default FromInput