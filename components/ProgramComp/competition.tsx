export default function Competition() {
    return (
        
        <div className="w-full">
            <img
            src='blue-program.png'
            alt='blue-one'
            className="w-full h-11/12"
            />
            <img
            src='hero-bg-left.png'
            alt='hero-bg-left'
            className="hidden md:block absolute z-10 -mt-[10rem] md:-mt-[25rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem] h-1/6 w-1/6"
            />
            <img
            src='hero-bg-left.png'
            alt='hero-bg-left'
            className="hidden md:block absolute z-10 -mt-[10rem] md:-mt-[25rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem] ml-[23rem] md:ml-[40rem] lg:ml-[55rem] xl:ml-[75rem] 2xl:ml-[80rem] h-1/6 w-1/6 rotate-180"
            />
            <div className="flex flex-col justify-start items-center gap-5 absolute  w-full text-white -mt-52 md:-mt-[28rem] lg:-mt-[35rem] xl:-mt-[52rem] 2xl:-mt-[60rem] z-30">
            <h2 className="text-center font-bold font-boogaloo uppercase lg:text-md md:text-sm text-sm xl:text-2xl 2xl:text-5xl">Competitions</h2>
            <p className="text-center font-mont initial lg:text-sm md:text-sm text-[0.55rem] xl:text-lg 2xl:text-xl w-[90%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-1/3">Organizing regular sports competitions at various levels provides young athletes a platform to showcase their talents and develop their competitive spirit.
            These competitions foster teamwork, discipline, and a love for sports.
            </p>
            </div>
        </div>
    )
}