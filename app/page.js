import AfreeChapter from "./component/AfreeChapter";
import CourseContent from "./component/CourseContent";
import CourseDetails from "./component/CourseDetails";
import CreatorSection from "./component/CreatorSection";
import FAQ from "./component/FAQ";
import GetFreeChapter from "./component/GetFreeChapter";
import Pricing from "./component/Pricing";
import Rating from "./component/Rating";
import Testimonial from "./component/Testimonial";

export default function Home() {
  return (<>
    <Pricing/>
    <Rating/>
    <CourseDetails/>
    <Testimonial/>
    <CourseContent/>
    <CreatorSection/>
    <FAQ/>
    <AfreeChapter/>
    <GetFreeChapter/>
    </>);
}
