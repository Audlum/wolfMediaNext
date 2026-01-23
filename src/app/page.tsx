import { AboutUs } from "@/widgets/layout/ui/about-us";
import AutomationWork from "@/widgets/layout/ui/automation-work";
import Communities from "@/widgets/layout/ui/communities";
import HelpBrends from "@/widgets/layout/ui/help-brends";
import HowWeWorks from "@/widgets/layout/ui/how-we-works";
import Statistics from "@/widgets/layout/ui/statistics";


export default function Home() {
  return (
    
     <main>
      
        <Statistics/>

        <AboutUs/>

        <Communities/>

        <HowWeWorks/>

        <HelpBrends/>

        <AutomationWork/>

     </main>
  );
}
