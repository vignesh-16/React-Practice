import { useState } from "react"; 
const CreateStory = () => {
    const [title, setTitle] = useState('');
    const [story, setBody] = useState('');
    const [author, setAuthor] = useState('vignesh');
    return ( 
        <div className="create">
            <h2>Write a new story</h2>
            <form>
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
                value={story}
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
                <button>Add Story</button>
            </form>
        </div>
     );
}
 
export default CreateStory;