import Goals from "@/components/HomeComp/Goals"
import Hero from "@/components/HomeComp/Hero"
import Location from "@/components/HomeComp/Location"
import Partner from "@/components/HomeComp/Partner"
import Reach from "@/components/HomeComp/Reach"
import Statement from "@/components/HomeComp/Statement"
import Stories from "@/components/HomeComp/Stories"

export default function Home() {
  return (
    <>
        <Hero/>
        <Statement/>
        <Stories/>
        <Reach/>
        <Location/>
        <Goals/>
        <Partner/>
    </>
  );
}
