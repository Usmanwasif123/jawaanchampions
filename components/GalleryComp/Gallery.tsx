export default function Gallery(){
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-row justify-center items-center">
            <h1 className="p-5 text-center w-full md:text-lg lg:text-xl text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase">
            Gallery
           </h1>
           </div>
           <div className="grid grid-cols-1 grid-rows-3 gap-7">
               <div className="border-4 border-green-900">
                <div className='bg-[#215faa] p-40 text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1>Interschool Championship 2024 (Final)</h1>
                    <div className="relative grid grid-cols-3 grid-rows-1 gap-0 border-4 border-yellow-900">
                     <div className="relative">
                       <img
                         className="border-4 border-green-900 rounded-lg transform translate-x-20 z-0"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                         alt=""
                       />
                     </div>
                     <div className="relative z-10">
                       <img
                         className="border-4 border-green-900 rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                         alt=""
                       />
                     </div>
                     <div className="relative">
                       <img
                         className="border-4 border-green-900 rounded-lg transform -translate-x-20 z-0"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                         alt=""
                       />
                     </div>
                   </div>
                    <button className="bg-[#8ac53d] text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl">see all</button>
                </div>
                </div>
               <div >
               <div className='bg-[#49c580] text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1>Monitoring and Evaluation Training</h1>

                    <button className="bg-[#215faa] text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl">see all</button>
                </div>
               </div>
               <div >
               <div className='bg-[#f69339] text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1>Master Training 2024</h1>

                    <button className="bg-[#49c580] text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl">see all</button>
                </div>
               </div>
           </div>
        </div>
    )
}