import Image from "next/image";
 const Header =()=> {
    return (
      <div className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    {/* Centered Paragraph */}
    <p className="text-center text-gray-600 mb-8">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
      Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-lg p-8">
      {/* Contact Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Address</h2>
        <p className="text-gray-600 mb-6">
          236 5th SE Avenue, New York NY10000, United States
        </p>
        <h2 className="text-xl font-semibold mb-4">Phone</h2>
        <p className="text-gray-600">
          Mobile: +(84) 546-6789 <br />
          Hotline: +(84) 456-6789
        </p>
        <h2 className="text-xl font-semibold mb-4 mt-6">Working Time</h2>
        <p className="text-gray-600">
          Monday-Friday: 9:00 - 22:00 <br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>

      {/* Contact Form */}
      <div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Abc"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Abc@def.com"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="This is optional"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Hi! I'd like to ask about..."
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    );
  }
  export default Header