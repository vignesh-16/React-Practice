import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useDelete from "./useDelete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Story = () => {
    console.log(useParams())
    const { id } =  useParams()
    const { data : story,  isLoading, serverError } = useFetch('http://localhost:3002/stories/' + id);
    const deleteThisStory = useDelete();
    const ReRoute = useHistory();

    const deleteStory = ()=> {
        deleteThisStory('http://localhost:3002/stories/'+story.id)
        .then(()=>{
            ReRoute.push("/")
        }).catch((err)=>{
            console.warn('Error deleting story: ',err)
        })
    }
    return (
        <div className="story-view">
            { isLoading && <div>Loading Story please wait...</div>}
            { serverError && <div>{serverError}</div> }
            { story && (
                <article>
                    <h3>{story.title}</h3>
                    <p>Written by <i>{story.author}</i></p>
                    <div>{story.story}</div>
                    <button onClick={ ()=>deleteStory() }>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Story;