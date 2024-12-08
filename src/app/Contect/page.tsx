import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Contact

          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
      <Image src="/images/group.png"  alt="logo" width={1440} height={316}  />
      
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
 
     
     <div className="flex items-center justify-center bg-white-100">
  <p
    className="w-[644px] text-center font-poppins font-medium text-[16px] leading-[24px] text-gray-600"
  >
    For More Information About Our Product & Services. 
    Please Feel Free To Drop Us An Email. 
    Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </p>
</div>

          
     <div className="bg-white-100 py-12">
       <div className="container mx-auto px-4">
         {/* <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1> */}

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
                 <label
                   className="block text-sm font-medium mb-1"
                   htmlFor="email"
                 >
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
                 <label
                   className="block text-sm font-medium mb-1"
                   htmlFor="subject"
                 >
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
                 <label
                   className="block text-sm font-medium mb-1"
                   htmlFor="message"
             >
                   Message
                 </label>
                 <textarea
                   id="message"
                   rows={4}
               placeholder="Hi! I'd like to ask about..."
                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 ></textarea>
               </div>
   
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
       <div className="flex justify-between">
  {/* // components/Footer.js */}
    <footer className="bg-gray-100 py-0">
      <div className="">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Free Delivery */}
       
        {/* 90 Days Return */}
        <div>
          <h3 className="text-lg font-semibold">90 Days Return</h3>
          <p className="text-[#9F9F9F]">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="w-[376px] h-[108px] top-[1656px] left-[944px]">
          <h3 className="text-lg font-semibold">Secure Payment</h3>
          <p className="w-[376px] h-[60px] top-[1704px] left-[944px] font-poppins font-[400] text-[15px] leading-[30px]text-[#9F9F9F]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
      </div>
     
      {/* Links */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left text-gray-600">
        <div>
          <address>
            405 University Drive Suite 200 Coral Gables, FL 33134 USA
          </address>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border rounded-md py-1 px-2 w-full"
            />
            <button className="mt-2 bg-black text-white px-4 py-1 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
            </div>
  


             </form>
         </div>
         </div>
       </div>
     </div> 
    

    
        </div>
      </main>
    </div>
  );
} 
