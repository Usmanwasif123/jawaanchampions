'use client';

export default function Training() {
    return (
        <div className="w-full absolute -mt-28 md:-mt-[15rem] lg:-mt-[20rem] xl:-mt-[30rem] 2xl:-mt-[30rem]">
            <img
            src='orange-one.png'
            alt='orange-one'
            className="w-full"
            />
            <img
            src='man-with-ball.png'
            alt-='man-with-ball'
            className="-mt-[4rem] md:-mt-[10rem] lg:-mt-[17rem] xl:-mt-[15rem] 2xl:-mt-[25rem] h-3/12 w-3/12 md:h-3/12 md:w-3/12 xl:h-1/5 xl:w-1/5 2xl:h-3/12 2xl:w-3/12 z-30"
            />
            <div id='training' className="flex flex-col justify-start items-center gap-5 absolute  w-full text-white mt-[-20rem] md:mt-[-35rem] lg:-mt-[40rem] xl:-mt-[40rem] 2xl:-mt-[70rem] z-20">
                <h2 className="text-center font-bold font-boogaloo uppercase lg:text-md md:text-sm text-sm xl:text-2xl 2xl:text-5xl">Teacher Training </h2>
                <p className="text-center font-mont initial lg:text-sm md:text-sm text-[0.55rem] xl:text-lg 2xl:text-xl w-[70%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-1/3">We equip teachers with the knowledge and skills to implement school sports and leadership programs effectively. Our training sessions cover sports pedagogy, leadership development, and creating inclusive sports environments.</p>
            </div>

            {/* Custom gap styles for different screen sizes */}
      <style jsx>{`
        #training {
          margin-top: -18rem;
        }
        @media (min-width: 375px) {
          #training {
            margin-top: -19rem;
          }
        }
          @media (min-width: 425px) {
          #training {
            margin-top: -20rem;
          }
        }
        @media (min-width: 768px) {
          #training {
             margin-top: -35rem; /* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #training {
             margin-top: -40rem;/* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #training {
             margin-top: -56rem; /* For large desktops */
          }
         @media (min-width: 2560px) {
          #training {
            margin-top: -120rem; /* For large desktops */
          }
      `}</style>
        </div>
    )
}