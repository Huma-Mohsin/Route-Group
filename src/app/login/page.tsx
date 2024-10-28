function Login() {
    return (
        <form>
            <label>
                Enter your Name:
                <input type="text" name="Your Name" />
            </label>
            <label>
                Enter your Feedback Here:
                <textarea name="message" />
            </label>
        </form>
    );
}

export default Login;
