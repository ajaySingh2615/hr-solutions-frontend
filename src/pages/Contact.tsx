const Contact = () => {
  return (
    <div className="container mx-auto p-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm h-32"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
