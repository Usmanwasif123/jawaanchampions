'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
const AOS = require('aos');
import Image from "next/image";

interface TheoryProps {
    title: string;
    paragraph: string;
}

const TheorySite = ({title, paragraph}: TheoryProps) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // You can add global AOS options here if needed
        });
    
        // Cleanup function to refresh AOS when the component unmounts or updates
        return () => {
          AOS.refresh(); // Refresh AOS to clean up animations
        };
      }, []);
      
    return (
        <div className={``}>
            <div className="flex h-full flex-col items-start justify-between p-6
            lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="flex flex-col gap-1 z-20">
                        <h4 className="bold-40 lg:bold-32 font-boogaloo uppercase text-center text-[#006837] mb-5">{title}</h4>
                        <p className="regular-16 text-[#8e8d8d] text-center text-center font-normal font-mont">{paragraph}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    )
}

const Theory = () => {
  return (
   <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 p-0 lg:p-5 xl:p-6 lg:mt-[-10rem] mt-[-10rem]'>
    <div>
    <Image 
            src='/orange-vector-hero.png'
            alt='orange-vector'
            width={1000}
            height={100}
            className="xl:ml-[30rem] xl:mt-[5rem] md:mt-[14rem] lg:mt-[12rem] mt-[30rem] ml-[5rem] absolute z-10"
            />
        <Image 
            src='/blue-vector-hero.png'
            alt='blue-vector'
            width={100}
            height={100}
            className="xl:ml-[60rem] xl:mt-[20rem] lg:mt-[23rem] lg:ml-[45rem] absolute hidden lg:block"
            />
        </div>
    <div className='hidden-scrollbar flex flex-col h-[1140px] w-full items-center justify-start xl:gap-72 lg:gap-28 gap-32 overflow-x-auto lg:h-[900px] xl:h-[900px] md:h-[900px]
     '>
        <TheorySite
        title='Theory of Change'
        paragraph="The 'Leave No One Behind' initiative in sports focuses on Physical Education (PE) in Pakistan, aiming to bridge the gap for underserved schools without proper exposure to PE. This theory of change addresses challenges like time constraints and limited opportunities in mainstream sports, promoting inclusivity and equal access for all. The strategic framework includes awareness campaigns, infrastructure improvements, and capacity-building initiatives to help schools integrate PE programs effectively. By offering tailored support and resources, the initiative aims to create a professional environment where PE is considered a crucial aspect of holistic education, ensuring every student can participate in physical activities and experience their benefits regardless of their background."
       
        />
        <TheorySite
        
         title='The Project'
         paragraph="The 'Leave No One Behind' initiative in sports focuses on Physical Education (PE) in Pakistan, aiming to bridge the gap for underserved schools without proper exposure to PE. This theory of change addresses challenges like time constraints and limited opportunities in mainstream sports, promoting inclusivity and equal access for all. The strategic framework includes awareness campaigns, infrastructure improvements, and capacity-building initiatives to help schools integrate PE programs effectively. By offering tailored support and resources, the initiative aims to create a professional environment where PE is considered a crucial aspect of holistic education, ensuring every student can participate in physical activities and experience their benefits regardless of their background."
        />
    </div>
    
    
   </section>
  )
}

export default Theory
