import Image from "next/image";
const Navbar =()=> {
    return (   
        
        <div className="bg-white-100 text-gray-900 " >

   
          
            <header className="bg-white shadow-md flex justify-between ">
                <nav className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* <div className="text-2xl font-bold">Meubel House</div> */}
                        <div className="space-x-6">
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Shop</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
                            {/* <a href="#" className="text-gray-700 hover:text-indigo-600">Blog</a> */}
                    <div className="w-[247px] h-[28px] top-[36px] left-[1093px] flex  justify-end -ml-auto-10 item-end gap-2 ">

                            <div className="w-[28px] h-[28px] top-[36px] left-[1312px]">
                                <div className="w-[24.53px] h-[22.06] top-[3.55px] left-[1.67px]">
                                <Image src="/images/vector4.png"  alt="logo" width={20} height={20}/>
                                </div>
                                </div>
                                <div className="[28px] h-[28px] top-[36px] left-[1239px] gap-1">
                                <div className="w-[23.33] h-[20.81px] top-[3.5px] left-[2.33px] border-[2px]">
                                <Image src="/images/vector3.png"  alt="logo" width={20} height={20}/>
                                </div>
                                </div>
                                <div className="[28px] h-[28px] top-[36px] left-[1166px] gap-2">
                                <div className="w-[22.17px] h-[22.17px] top-[2.33px] left-[2.33px] border-[2px]">
                                <Image src="/images/vector1.png"  alt="logo" width={20} height={20}/>
                                </div>
                                </div>
                                <div className="[28px] h-[28px] top-[36px] left-[1093px] gap-2">
                                <div className="w-[23.33px] h-[18.67px] top-[4.67px] left-[2.33px]">
                                <Image src="/images/vector.png"  alt="logo" width={20} height={20}/>
                        </div>
                    </div>
                                </div>
                                </div>
                                
                                
                </div>
                </nav>
            </header>
              
        

            
                <div className="max-w-7xl mx-auto">
                    <div className="[1440px] h-[316px] top-[100px]">
                    <Image src="/images/group 78.png"  alt="logo" width={1440} height={50} />
                    </div>
                    {/* <h1 className="text-3xl font-semibold mb-6">Blog</h1>
                    <h1 className="text-3xl font-semibold mb-6">Home</h1> */}
                    <div className="w-[1440px] h-[300px] top-[3126px]">
                        <div className="w-[376px] h-[108px] top-[3222px] left-[944]">

                        <p className="w-[376px] h-[60px] top-[3270px] left-[944px] font-Poppins font-normal font-size:20px leading-[30px]" >100% Consectetur adipim scing elit.</p>

                        <p className="w-[265px] h-[48px] top-[3222px] left-[944px] font-Poppins font-medium font-size:[32px] leading-[48px]"> Secure Payment</p>
                        </div>

                    </div>
                    </div>

                    <div className="space-x-6 mb-6">
                        <span className="text-gray-600">Categories:</span>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Crafts</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Design</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Handmade</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Interior</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Wood</a>
                    </div>
        
                
                    <div className="space-y-12">
                        <article>
                            <h2 className="text-2xl font-semibold text-gray-800">Going all-in with millennial design</h2>
                            <p className="text-sm text-gray-500">14 Oct 2022 | Wood</p>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Read more</a>
                        </article>
        
                        <article>
                            <h2 className="text-2xl font-semibold text-gray-800">Exploring new ways of decorating</h2>
                            <p className="text-sm text-gray-500">03 Aug 2022 | Handmade</p>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Read more</a>
                        </article>
        
                        <article>
                            <h2 className="text-2xl font-semibold text-gray-800">Handmade pieces that took time to make</h2>
                            <p className="text-sm text-gray-500">03 Aug 2022 | Handmade</p>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Read more</a>
                        </article>
        
                        <article>
                            <h2 className="text-2xl font-semibold text-gray-800">Modern home in Milan</h2>
                            <p className="text-sm text-gray-500">03 Aug 2022 | Interior</p>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Read more</a>
                        </article>
        
                        <article>
                            <h2 className="text-2xl font-semibold text-gray-800">Colorful office redesign</h2>
                            <p className="text-sm text-gray-500">03 Aug 2022 | Design</p>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Read more</a>
                        </article>
                    </div>
                </div>
            </div>
        
           
            <footer className="bg-white py-8 shadow-md">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="mb-6">
                        <p className="font-semibold text-xl">Meubel House</p>
                        <p className="text-gray-600 text-sm">400 University Drive Suite 200, Coral Gables, FL 33134 USA</p>
                    </div>
                    <div className="space-x-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Shop</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Returns</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">About</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policies</a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800">Contact</a>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-600 text-sm">&copy; 2022 Meubel House. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        

    
    
    );
}
export default Navbar