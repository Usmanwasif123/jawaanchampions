export default function Kitbags() {
    return(
        <div className="w-full">
            <img
            src='green-one.png'
            alt='green-one'
            className="w-full h-11/12"
            />
            <div className="flex flex-col justify-start items-center gap-2 md:gap-5 absolute  w-full text-white -mt-[12rem] md:-mt-[25rem] lg:-mt-[35rem] xl:-mt-[50rem] 2xl:-mt-[55rem] z-20">
                <h2 className="text-center font-bold font-boogaloo uppercase lg:text-md md:text-sm text-sm xl:text-2xl 2xl:text-5xl">Specialized Kit Bags<br/> <span className="lg:text-sm md:text-sm text-[0.55rem] xl:text-md 2xl:text-lg">(Specially designed for Modified Sports)</span></h2>
                <p className="text-center font-mont initial lg:text-sm md:text-sm text-[0.55rem] xl:text-lg 2xl:text-xl w-[70%] md:w-[60%] lg:w-[60%] xl:w-[55%] 2xl:w-1/3">We ensure our participants have the necessary equipment to participate in sports by providing
                 specialized kit bags filled with essential items such as bats, balls, and other sports gear. These kit bags help remove barriers to participation and make sports accessible to all</p>
            </div>
        </div>
    )
}