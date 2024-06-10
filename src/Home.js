import { useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {

    const [times, setTimes] = useState(0);
    const { data : stories,  isLoading, serverError } = useFetch('http://localhost:3002/stories')

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
            <div className="stories">
                { isLoading && <div>Please wait..</div> }
                { serverError && <div>Error Retriving data</div> }
                {
                    stories &&
                    stories.map((story)=> (
                        <Link to={`/story/${story.id}`}>
                            <div className="story-preview" key={story.id}>
                                <h3>{story.title}</h3>
                                <div>{story.author}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Home;