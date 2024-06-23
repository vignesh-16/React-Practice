const SignUP = () => {
    return ( 
        <div>
            <form>
                <label htmlFor="First-name">First name:</label>
                <input type="text" required placeholder="first name"></input>
                <label htmlFor="Last-name">Last name:</label>
                <input type="text" required placeholder="last name"></input>
                <label htmlFor="Email-Address">Email address:</label>
                <input type="email" required placeholder="eg: eltonjohn@gmail.com"></input>
                <label htmlFor="Account-type">Account type:</label>
                <select value={'Account type'} required onChange={(e)=>{console.log(e)}}>
                    <option value={'Candidate'}>I'm searching for a job</option>
                    <option value={'Recruiter'}>I'm here to recruit</option>
                </select>
                <label htmlFor="Password">Password:</label>
                <input type="password" required placeholder="choose a password"></input>
                <label htmlFor="Confirm-Password">Re-Enter Password:</label>
                <input type="password" required placeholder="Re-enter password"></input>
                <button>Create Account</button>
            </form>
        </div>
     );
}
 
export default SignUP;