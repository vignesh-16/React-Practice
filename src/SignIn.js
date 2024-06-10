const SignIn = () => {
    return ( 
        <>
            <body>
                <div class="landing-page-container">
                    <div class="wrapper">
                        <div class="login_box log-in-section">
                        <div class="login-header">
                            <span>Login</span>
                        </div>
                    
                        <div class="input_box">
                            <input type="text" id="user" name="userid" class="input-field" required></input>
                            <label for="user" class="label">Username</label>
                            <i class="bx bx-user icon"></i>
                        </div>
                    
                        <div class="input_box">
                            <input type="password" id="pass" name="userpass" class="input-field" required></input>
                            <label for="pass" class="label">Password</label>
                            <i class="bx bx-lock-alt icon"></i>
                        </div>
                    
                        <div class="remember-forgot">
                            <div class="remember-me">
                                <input type="checkbox" id="remember"></input>
                                <label for="remember">Remember me</label>
                            </div>
                    
                            <div class="forgot">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                    
                        <div class="input_box">
                            <input type="submit" class="input-submit js-log-in" value="Login"></input>
                        </div>
                    
                        <div class="register js-sign-up">
                            <span>Don't have an account? <a href="#">Register</a></span>
                        </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
     );
}
 
export default SignIn;