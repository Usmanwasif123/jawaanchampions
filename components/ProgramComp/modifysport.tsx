'use client'
export default function Modifiesport () {
    return (
        <div className="w-full absolute -mt-[5rem] md:-mt-[15rem] lg:-mt-[23rem] xl:-mt-[32rem] 2xl:-mt-[30rem]">
            <img
            src='dark-blue-one.png'
            alt='dark-blue-one'
            className="w-full"
            />
            <img
            src='women-with-racket.png'
            alt-='women-with-racket'
            className="-mt-[27rem] md:-mt-[45rem] lg:-mt-[60rem] xl:-mt-[85rem] 2xl:-mt-[110rem] h-3/12 w-3/12 md:h-3/12 md:w-3/12 2xl:h-3/12 2xl:w-3/12 ml-[20rem] md:ml-[36rem] lg:ml-[48rem] xl:ml-[67rem] 2xl:ml-[71rem]"
            id='women'
            />
            <img
            src='man-with-football.png'
            alt-='man-with-football'
            className="mt-[1rem] lg:mt-[10rem] xl:mt-[15rem] 2xl:mt-[10rem] h-3/12 w-3/12 md:h-3/12 md:w-3/12 2xl:h-3/12 2xl:w-3/12"
            id='man'
            />
            <div id='modify' className="flex flex-col justify-start items-center gap-5 absolute  w-full text-white -mt-[10rem] md:-mt-[30rem] lg:-mt-[40rem] xl:-mt-[35rem] 2xl:-mt-[55rem] z-30">
                <h2 className="text-center font-bold font-boogaloo uppercase lg:text-md md:text-sm text-sm xl:text-2xl 2xl:text-5xl">Modified sports</h2>
                <p className="text-center font-mont initial lg:text-sm md:text-sm text-[0.55rem] xl:text-lg 2xl:text-xl w-[70%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-1/3">We are adapting popular sports to suit the resources available and the needs and abilities of young athletes with disabilities. Our modified sports programs promote inclusion, encourage participation,
                and provide opportunities for everyone to experience the joy of sports.</p>
            </div>
            {/* Custom gap styles for different screen sizes */}
      <style jsx>{`
        #modify {
          margin-top: -17rem;
        }
        @media (min-width: 375px) {
          #modify {
            margin-top: -19rem;
          }
        }
        @media (min-width: 425px) {
          #modify {
            margin-top: -19rem;
          }
        }
        @media (min-width: 768px) {
          #modify {
             margin-top: -30rem; /* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #modify {
             margin-top: -37rem; /* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #modify {
             margin-top: -50rem;/* For large desktops */
          }
         @media (min-width: 2560px) {
          #modify {
            margin-top: /* For large desktops */
          }
      `}</style>
      <style jsx>{`
        #man {
          margin-top: 9rem;
        }
        @media (min-width: 375px) {
          #man {
            margin-top: 10rem;
          }
        }
          @media (min-width: 425px) {
          #man {
            margin-top: 8rem;
          }
        }
        @media (min-width: 768px) {
          #man {
             margin-top: /* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #man {
             margin-top: /* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #man {
             margin-top: /* For large desktops */
          }
         @media (min-width: 2560px) {
          #man {
            margin-top: /* For large desktops */
          }
      `}</style>
      <style jsx>{`
        #women {
          margin-left: 17rem;
          margin-top: -25rem;
        }
        @media (min-width: 375px) {
          #women {
            margin-left: 19rem;
            margin-top: -28rem;
          }
        }
        @media (min-width: 425px) {
          #women {
            margin-left: 20rem;
            margin-top: -27rem;
          }
        }
        @media (min-width: 768px) {
          #women {
             margin-left: 36rem; /* For larger screens like tablets */
             margin-top: -45rem;
          }
        }
        @media (min-width: 1024px) {
          #women {
             margin-left: 48rem;/* For desktops */
             margin-top: -60rem;
          }
        }
         @media (min-width: 1280px) {
          #women {
             margin-left: 67rem;/* For large desktops */
             margin-top: -85rem;
          }
         @media (min-width: 2560px) {
          #women {
            margin-left: /* For large desktops */
            margin-top:
          }
      `}</style>
        </div>
    )
}