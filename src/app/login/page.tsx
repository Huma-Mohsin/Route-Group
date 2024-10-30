function Login() {
    return (
        <form className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Feedback Form</h1>
            
            <label className="mb-4">
                <span className="block text-lg font-semibold">Enter your Name:</span>
                <input 
                    type="text" 
                    name="Your Name" 
                    className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </label>
            
            <label className="mb-4">
                <span className="block text-lg font-semibold">Enter your Feedback Here:</span>
                <textarea 
                    name="message" 
                    className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                />
            </label>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Submit
            </button>
        </form>
    );
}

export default Login;
