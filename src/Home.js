import { useState } from "react";
const Home = () => {

    const [times, setTimes] = useState(0);

    const clickHandler = (e)=>{
        console.log('You have clicked the button!',e)
        let currentCount = times;
        currentCount += 1
        setTimes(currentCount)
    }
    const ClickHandler2 = (name, e)=> {
        console.log('You have checked the button!',name,e)
    }
    
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={clickHandler}>Click here</button> <span>you have clicked {times} times</span>
            <button onClick={(e)=>ClickHandler2('vignesh',e)}>Check again</button>
        </div>
     );
}
 
export default Home;