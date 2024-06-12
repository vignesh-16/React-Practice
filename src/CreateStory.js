import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; 
import usePost from "./usePost";


const CreateStory = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('vignesh');
    const [inProgress,  setInProgress] = useState(false)
    const [error, setError] = useState(false)
    const ReRoute = useHistory();

    const createStory = usePost('http://localhost:3002/stories');

    const CollectStory = (e)=> {
        e.preventDefault();
        let story = { title, story: body, author }
        setInProgress(true);
        createStory(story)
            .then(() => {
                setTitle('');
                setBody('');
                setAuthor('vignesh');
                setInProgress(false);
                setError(false);
                ReRoute.push('/')
            })
            .catch(() => {
                setError(true);
                setInProgress(false);
            });
    }

    return ( 
        <div className="create">
            <h2>Write a new story</h2>
            { !error && <form onSubmit={(e) => CollectStory(e)}>
                <label>Title:</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Story:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="vignesh">Vignesh</option>
                <option value="theweeknd">TheWeeknd</option>
                </select>
                { !inProgress && <button>Add Story</button> }
                { inProgress && <button>Please wait while the story is saved</button>}
            </form> }
            { error && <div>Something went wrong</div> }
        </div>
     );
}
 
export default CreateStory;