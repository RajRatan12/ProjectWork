import { ProfileCardData } from "../Data/ProfileCardData";
import ProfileCards from "../Cards/ProfileCards";
const About = () => {

  console.log(ProfileCardData[0]);
  return(
    <div className="">
      <div><ProfileCards {...ProfileCardData[0]}/></div>
      <div><ProfileCards {...ProfileCardData[1]}/></div>
      <div><ProfileCards {...ProfileCardData[2]}/></div>
      <div><ProfileCards {...ProfileCardData[3]}/></div>
      <div><ProfileCards {...ProfileCardData[4]}/></div>
    </div>
  )
}
export default About;