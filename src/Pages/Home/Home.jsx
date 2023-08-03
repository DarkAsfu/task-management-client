import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Banner from "./Banner";
import LatestTask from "./LatestTask";

const Home = () => {
    return (
        <div>
           <ScrollToTop></ScrollToTop>
           <Banner></Banner>
           <LatestTask></LatestTask> 
        </div>
    );
};

export default Home;