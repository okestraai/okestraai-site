const ModalContent = ({ onClose }) => {
  return (
    <>
      <h2 className="text-xl text-black font-bold mb-4">Request a Demo</h2>
      <p className="text-gray-600 mb-4">Fill out the form to request a demo of our product.</p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full h-7 text-black rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Business Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md h-7 text-black border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="mt-1 block w-full rounded-md h-7 text-black border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black focus:border-black focus:ring-black sm:text-sm"
            placeholder="Tell us about your needs..."
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border text-black border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalContent;