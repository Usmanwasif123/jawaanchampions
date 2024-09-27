'use client'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Import keen-slider styles
import { useState, useRef, useEffect } from "react";

export default function Story() {
  const stories = [
    {
      bgColor: "bg_light_green",
      borderColors: "border-yellow",
      title: "Rounders on Blackboard",
      content: `In a small, bustling school with no outdoor space, a group of students faced the challenge of having no playground for their beloved game of rounders, a modified sport introduced by Jawaan Champions. This was also the first time they truly understood the importance of physical activity and education. Undeterred, they turned adversity into opportunity by practicing on a blackboard for six months. Their classroom became a sanctuary of imagination and determination, where limitations fueled their creativity. Through dedication, they mastered the game, devising new strategies and variations. When they finally transitioned from chalkboard to playground, their perseverance and ingenuity shone brilliantly. The Jawaan Champions exemplified how enthusiasm and innovation can catalyze change, showing that the human spirit's capacity for resilience and creativity knows no bounds. Their journey was not just about mastering a sport, but about transforming challenges into triumphs and inspiring others with their unwavering spirit.`,
      images: ["/story1.png"],
    },
    {
      bgColor: "bg-dark-blue",
      borderColors: "border-green",
      title: "Active School, Raised Admissions",
      content: `When St. Jude’s High School in North Nazimabad first partnered with Jawaan Champions, their primary goal was to improve their students’ health and well-being. Little did they know, this decision would completely transform their school's reputation and culture. By incorporating Jawaan Champions’ modified sports programs into their manifesto, making them part of the active schools program, the benefits extended far beyond the school gates. Parents were drawn to the idea of their children attending a school that prioritized both physical and mental well-being, leading to a surge in applications. This increased demand for enrollment is a testament to the growing recognition of holistic education's value. Moreover, in a place that had never witnessed girls playing on the field and winning tournaments, the transformation was even more profound. The sight of girls excelling in sports not only challenged societal norms but also inspired a community to re-evaluate its views on gender roles and opportunities. The experience of St. Jude’s underscores a broader societal shift towards understanding that true educational success involves nurturing the whole child, body and mind, highlighting the profound impact that innovative health and wellness programs can have on a community
“We never imagined that adding ‘Active School’ to our brochure would make such a difference,” shared the school principal, Mr. Vincent Thomas. “But the results are unexpected. Our students are happier, healthier, and academically performing better. And the best part? We’re filling up our classrooms with eager young minds.” 
ST Jude’s High school, North Nazimabad is just one example of how Jawaan Champions is not only improving the lives of children but also uplifting entire communities.
`,
      images: ["/story2.png"],
    },
    {
      bgColor: "bg-red",
      borderColors: "border-yellow",
      title: "Empowerment Through Physical Activity",
      content: `Mr. Ali, a school teacher, faced challenges in engaging his students in physical activity due to limited resources. Jawaan Champions provided him with the training and tools to transform his classroom into a dynamic learning environment. By incorporating innovative, modified games that catered to all students, he ignited a new spark of enthusiasm in his class. The positive ripple effect was astonishing; not only did the student engagement soar, but academic performance also saw a remarkable uplift. Inspired by Mr. Ali's success, other teachers began adopting similar strategies, making physical activity an integral part of the school's curriculum. Recognizing his dedication and expertise, the school offered him a supplementary income for his extra efforts. It’s a small step, but for Mr. Ali, it felt like a giant leap. 

Jawaan Champions didn’t just transform classrooms; they transformed lives. By equipping teachers with new skills, they opened doors to new opportunities, proving that education can be a catalyst for both personal and economic growth.
`,
      images: ["/story3.png"],
    },
    {
      bgColor: "bg-yellow",
      borderColors: "border-green",
      title: "Faith and Passion: Breaking Barriers in Sports",
      content: `For years, sports had been a boys' domain in many Pakistani schools and the girls have often found themselves limited to the sidelines with their potential untapped. Amina, a bright, young girl, had always loved the thrill of competition. But as she grew older, the demands of her school and societal expectations began to draw invisible lines around her. The hijab, a symbol of her faith, now felt like a barrier. 
The introduction of Jawaan Champions' inclusive programs proved to be a game-changer. With modified sports and a supportive environment, Amina found her place on the field. Cricket, the game which was once male dominated, became her forte. Her powerful batting and fielding skills soon made her a star. 
As Amina and her teammates excelled, people’s attitudes began to shift. The once skeptical eyes turned into applause and encouragement. The girls' team became a symbol of empowerment, inspiring other girls to step out of their comfort zones and enter the ground.
Jawaan Champions didn't just teach girls how to play; they taught them how to win, how to lead, and how to defy stereotypes. Their journey was a testament that faith and dreams could coexist, that limitations were meant to be challenged, and that every girl, regardless of how she dressed, deserved a chance to shine.
`,
      images: ["/story4.png"],
    },
  ];
  const animation = { duration: 9999, easing: (t: number) => t };
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const autoplay = (slider: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        slider.moveToIdx((slider.track.details.abs + 1) % stories.length, true, animation);
      }, 2000);
    }
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    drag: true,
    created(s) {
      autoplay(s); // Start autoplay when slider is created
    },
    updated(s) {
      autoplay(s); // Restart autoplay when the slider updates
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const pauseSlider = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resumeSlider = () => {
    setIsPaused(false);
    autoplay(instanceRef.current);
  };

  return (
    <section className="flex flexCenter flex-col gap-5 mb-10 md:mb-5">
      <div className="flex flex-row justify-between items-center gap-5 md:gap-20 xl:gap-56">
        <div>
          <img 
          src='ol-vec-story.png'
          alt='orange-vector'
          height={900}
          width={900}
          className="mt-20"
          />
        </div>
      <h1 className="p-5 text-center w-full lg:text-xl text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase">
        Success Stories
      </h1>
      <div className="flex flex-row">
      <img
      src='bl-vec-story.png'
      alt='blue-vector'
      height={120}
      width={120}
      />
      <img 
          src='rr-vec-story.png'
          alt='red-vector'
          height={900}
          width={900}
          />
      </div>
      </div>
      <div
    ref={sliderRef}
    onMouseEnter={pauseSlider} // Pause the slider when the mouse enters
    onMouseLeave={resumeSlider} // Resume the slider when the mouse leaves
    className="keen-slider"
  >

      <div ref={sliderRef} className="keen-slider">
        {stories.map((story, index) => (
          <div
            key={index}
            className="keen-slider__slide custom-shape-divider-top-1727076813 relative"
          >
            <div className="-rotate-0 relative z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
                viewBox="0 0 1000 100"
                fill="#fff"
              >
                <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" />
              </svg>
            </div>
            <div className={`${story.bgColor} w-full h-full flexCenter flex-col gap-5`}>
              <div
                className={`${story.borderColors} h-60 w-60 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-[40rem] lg:w-[40rem] xl:h-[40rem] xl:w-[40rem] rounded-full flex flexCenter items-center justify-center overflow-hidden z-10  md:-mt-8`}
              >
                {story.images?.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`story image ${imgIndex + 1}`}
                  className="rounded-full h-full w-full -mt-4 transform translate-x-1 md:translate-x-0 lg:translate-x-0 xl:translate-x-0 z-20"
                />
                ))}
                <img
                  src="cloud-story.png"
                  alt="cloud-story"
                  className="absolute z-0 h-11/12 w-11/12 md:h-8/12 md:w-8/12 mt-20"
                />
              </div>
              <div className="w-full mt-3 flex flexCenter gap-5 flex-col lg:text-lg text-sm xl:text-xl 2xl:text-2xl text-white font-semibold font-boogaloo">
                <h2 className='uppercase'>{story.title}</h2>
                <p className="w-11/12 md:w-4/6 mb-20 text-center lg:text-md text-xs xl:text-lg 2xl:text-xl text-white font-normal font-mont initial">
                  {story.content}
                </p>
              </div>
              {/* Dots for pagination */}
      <div className="flex justify-center items-center gap-2">
        {stories.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 mb-4 ${
              currentSlide === idx ? 'bg-[#0c1933]' : 'bg-gray-300'
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}
