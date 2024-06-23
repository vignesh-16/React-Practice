import { useState } from "react";

const SignIn = () => {
    const [userId, setUserId] = useState('username or email id');
    const [password, setPassword] = useState('Enter password');
    const [formData, setFormData] = useState({ username: userId, password: password });
    const url = 'http://127.0.0.1:9000/signin';
    const userSignIn = async(e)=> {
        e.preventDefault();
        setFormData({username : userId, password: password})
        console.log(`%c so here is the form data: `, 'color: maroon; font-size: 20px', formData);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            console.log('%c Server response from localhost:9000: ','color: violet; font-size: 20px', responseData)
            if(responseData.statusCode === 401) {
               console.log('%c Server response seems to be good','color: blue; font-size: 20px')
            }
            return responseData;
        } catch (error) {
            throw error;
        }
    }

    return (
        <div>
            <h2>Welcome !</h2>
            <form onSubmit={ (e)=> userSignIn(e) }>
                <label>Sign in:</label>
                <input type="text" required placeholder={userId} onChange={(e) => setUserId(e.target.value)}/>
                <input type="password" required placeholder={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Sign in</button>
            </form>
        </div>
     );
}
 
export default SignIn;