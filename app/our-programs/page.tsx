import Competition from '@/components/ProgramComp/competition';
import Hero from '../../components/ProgramComp/hero';
import Training from '@/components/ProgramComp/training';
import Kitbags from '@/components/ProgramComp/kitbags';
import Modifiesport from '@/components/ProgramComp/modifysport';
import Physicaledu from '@/components/ProgramComp/physicaledu';

export default function Page() {
  return (
    <div>
      <Hero />
      <Competition/>
      <Training/>
      <Kitbags/>
      <Modifiesport/>
      <Physicaledu/>
    </div>
  );
}
