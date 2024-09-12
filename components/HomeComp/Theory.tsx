'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
const AOS = require('aos');

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
            <div className="flex h-full flex-col items-center justify-between p-0
            lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="flex flex-col justify-center items-center gap-1 z-20">
                        <h4 className="bold-40 lg:bold-32 font-boogaloo uppercase text-center text-[#006837] mb-4">{title}</h4>
                        <p className="regular-16 text-[#8e8d8d] text-center text-center font-normal font-mont w-3/4">{paragraph}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    )
}

const Theory = () => {
  return (
   <section className='2xl:max-container relative flex flex-col justify-center items-center lg:mb-10 lg:py-20 xl:mb-0 p-0 lg:p-5 xl:p-6'>
    <div>
    <img 
            src='/orange-vector-hero.png'
            alt='orange-vector'
            width={1000}
            height={100}
            className="xl:ml-[-10rem] xl:mt-[14rem] md:mt-[14rem] lg:mt-[16rem] lg:ml-[-24rem] mt-[39rem] ml-[-9.8rem] absolute z-10"
            />
        <img 
            src='/blue-vector-hero.png'
            alt='blue-vector'
            width={100}
            height={100}
            className="xl:ml-[24rem] xl:mt-[30rem] lg:mt-[23rem] lg:ml-[45rem] absolute hidden lg:block"
            />
        </div>
    <div className='hidden-scrollbar flex flex-col h-[1700px] w-full items-start justify-center xl:gap-56 lg:gap-28 gap-12 overflow-x-auto lg:h-[950px] xl:h-[950px] md:h-[900px] lg:mt-[-10rem] mt-[-8rem]'>
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
