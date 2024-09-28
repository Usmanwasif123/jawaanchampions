'use client'
import React, { useState } from "react";
import Modal from "react-modal";

export default function Gallery(){
  // Define the image type
  type Image = {
    src: string;
    alt: string;
  };
  
  const images: Image[]= [
    { src: "gallery1.jpg", alt: "Gallery 1" },
    { src: "gallery2.jpg", alt: "Gallery 2" },
    { src: "gallery3.jpg", alt: "Gallery 3" },
  ];

  const images2: Image[] = [
    { src: "gallery4.jpg", alt: "Gallery 4" },
    { src: "gallery5.jpg", alt: "Gallery 5" },
    { src: "gallery6.jpg", alt: "Gallery 6" },
  ];

  const images3: Image[] = [
    { src: "gallery7.jpg", alt: "Gallery 7" },
    { src: "gallery8.jpg", alt: "Gallery 8" },
    { src: "gallery9.jpg", alt: "Gallery 9" },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state
  const [currentImages, setCurrentImages] = useState<Image[]>([]); // Set type as Image[] // Track current image set
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image

  // Function to open modal
  const openModal = (index: number, imageSet: Image[]) => {
    setCurrentImages(imageSet);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % currentImages.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + currentImages.length) % currentImages.length);
  };

    return (
           <>
           <div className="flex flex-col justify-center items-center gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="flex flex-row justify-center items-center w-full">
            <h1 className="text-center w-full md:text-lg lg:text-xl text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase">
            Gallery
           </h1>
           </div>
           <div className="grid grid-cols-1 grid-rows-3 relative gap-6 md:gap-14 lg:gap-16 xl:gap-20">
               <div className="relative w-full flex flexCenter flex-col">
               <div className="relative w-full flex flexCenter flex-col">
                <img src='wave.svg' alt='wave'className="wave absolute z-0"/>
               </div>
                <div className='bg-[#215faa] flex flexCenter flex-col w-full pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 xl:pr-80 xl:pl-80 xl:pt-56 xl:pb-56 text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1 className="md:-mt-10 md:mb-14 lg:-mt-14 lg:mb-16 xl:-mt-28 xl:mb-20">Interschool Championship 2024 (Final)</h1>
                    <div className="relative grid grid-cols-3 grid-rows-1 p-0">
                    {images.map((image, index) => (
                     <div key={index} className="relative">
                       <img
                     className={`rounded-lg cursor-pointer transform ${
                      index === 0
                      ? "translate-x-24 translate-y-10 -rotate-6 z-10 " // Left image (back)
                      : index === 1
                      ? modalIsOpen ? "translate-y-7 relative z-0" : "translate-y-7 relative z-20" // Middle image (front and slightly bigger)
                      : "-translate-x-24 translate-y-10 rotate-6 z-10" // Right image (back)
                  } w-full h-full border-8 ${
                    index === 0
                      ? "border-[#49c580]" // Left image border color
                      : index === 1
                      ? "border-[#f69339]" // Middle image border color
                      : "border-[#8bc53e]" // Right image border color
                  }`}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => openModal(index, images)} // Open modal on image click
                     />
                    </div>
                     ))}
                   </div>
                   <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-10 mt-40"/>
                    </div>
                    <button
                    className="bg-[#8ac53d] text-center px-10 py-2 mt-20 rounded-lg text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl"
                    onClick={() => openModal(0, images)} // Open modal starting from the first image
                    >See All
                    </button>
                    <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-10 rotate-180"/>
                    </div>
                    </div> 
                    </div>
                    <div className="relative">
                    <div className="relative">
                    <img src='wave.svg' alt='wave' className="wave2 absolute z-0 rotate-180 -mt-16 md:-mt-28 lg:-mt-32 xl:-mt-52"/>
                    </div>
                    <div className="relative w-full flex flexCenter flex-col mt-5">
                   <div className="relative w-full flex flexCenter flex-col">
                <img src='wave.svg' alt='wave'className="wave absolute z-0"/>
               </div>
                <div className='bg-[#49c580] flex flexCenter flex-col w-full pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 xl:pr-80 xl:pl-80 xl:pt-56 xl:pb-56 text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1 className="md:-mt-10 md:mb-14 lg:-mt-14 lg:mb-16 xl:-mt-28 xl:mb-20">Monitoring and Evaluation Training</h1>
                    <div className="relative grid grid-cols-3 grid-rows-1 gap-10 p-0">
                    {images2.map((image, index) => (
                     <div key={index} className="relative">
                       <img
                     className={`rounded-lg cursor-pointer transform ${
                      index === 0
                      ? "translate-x-24 translate-y-10 -rotate-6 z-10 " // Left image (back)
                      : index === 1
                      ? modalIsOpen ? "translate-y-7 relative z-0" : "translate-y-7 relative z-20" // Middle image (front and slightly bigger)
                      : "-translate-x-24 translate-y-10 rotate-6 z-10" // Right image (back)
                  } w-full full border-8 ${
                    index === 0
                      ? "border-[#f69339]" // Left image border color
                      : index === 1
                      ? "border-[#215faa]" // Middle image border color
                      : "border-[#8ac53d]" // Right image border color
                  }`}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => openModal(index, images2)} // Open modal on image click
                     />
                    </div>
                     ))}
                   </div>
                   <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-0 mt-40 hidden md:block"/>
                    </div>
                    <button
                    className="bg-[#215faa] text-center px-10 py-2 mt-20 rounded-lg text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl"
                    onClick={() => openModal(0, images2)} // Open modal starting from the first image
                    >See All
                    </button>
                    <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-0 rotate-180 hidden md:block"/>
                    </div>
                    
                    </div> 
                    
                    </div>
                    <div className="relative">
                    <img src='wave.svg' alt='wave' className="wave2 absolute z-0 rotate-180 -mt-8 md:-mt-16 lg:-mt-20 xl:-mt-32"/>
                    </div>
                    
                   </div>
                   <div className="relative w-full flex flexCenter flex-col mt-5">
                   <div className="relative w-full flex flexCenter flex-col">
                <img src='wave.svg' alt='wave'className="wave absolute z-0"/>
               </div>
                <div className='bg-[#f69339] flex flexCenter flex-col w-full pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 xl:pr-80 xl:pl-80 xl:pt-56 xl:pb-56 text-center text-white font-bold font-boogaloo uppercase text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
                    <h1 className="md:-mt-10 md:mb-14 lg:-mt-14 lg:mb-16 xl:-mt-28 xl:mb-20">Master Training 2024</h1>
                    <div className="relative grid grid-cols-3 grid-rows-1 gap-10 p-0">
                    {images3.map((image, index) => (
                     <div key={index} className="relative">
                       <img
                     className={`rounded-lg cursor-pointer transform ${
                      index === 0
                      ? "translate-x-24 translate-y-10 -rotate-6 z-10 " // Left image (back)
                      : index === 1
                      ? modalIsOpen ? "translate-y-7 relative z-0" : "translate-y-7 relative z-20" // Middle image (front and slightly bigger)
                      : "-translate-x-24 translate-y-10 rotate-6 z-10" // Right image (back)
                  } w-full full border-8 ${
                    index === 0
                      ? "border-[#b93636]" // Left image border color
                      : index === 1
                      ? "border-[#49c580]" // Middle image border color
                      : "border-[#215faa]" // Right image border color
                  }`}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => openModal(index, images3)} // Open modal on image click
                     />
                    </div>
                     ))}
                   </div>
                   <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-0 mt-40 hidden md:block"/>
                    </div>
                    <button
                    className="bg-[#49c580] text-center px-10 py-2 mt-20 rounded-lg text-center text-white font-bold font-boogaloo capitalize text-xs md:text-sm lg:text-ms xl:text-lg 2xl:text-xl"
                    onClick={() => openModal(0, images3)} // Open modal starting from the first image
                    >See All
                    </button>
                    <div className="relative flex flexCenter">
                    <img src='wave2.svg' alt='wave' className="wave2 absolute z-0 rotate-180 hidden md:block"/>
                    </div>
                    
                    </div> 
                    
                    </div>
                    <div className="relative mb-5 md:mb-0">
                    <img src='wave.svg' alt='wave' className="wave2 absolute z-0 rotate-180 -mt-12 md:-mt-28 lg:-mt-36 xl:-mt-48"/>
                    </div>
                
                   
               </div>
               {/* React Modal for Gallery */}
               <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Gallery Modal"
                className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-75"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                {/* Close Button */}
                <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
               &times;
              </button>
              {/* Gallery Image Display */}
              <div className="relative flex justify-center items-center">
              <img
            src={currentImages[currentIndex]?.src}
            alt={currentImages[currentIndex]?.alt}
            className="rounded-lg w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-auto xl:h-96"
          />
            </div>
            {/* Previous and Next buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevImage}
                className="text-white text-4xl font-bold px-4"
              >
                &#8592;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextImage}
                className="text-white text-4xl font-bold px-4"
              >
              &#8594;
             </button>
             </div>
            </Modal>
            </div>
               
               
           </>
    )
}