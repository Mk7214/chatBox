import ChatSection from "../components/ChatSection.jsx";
import SideBar from "../components/SideBar.jsx";

const Home = () => {
  return (
    <div className="flex w-full h-full ">
      <SideBar />

      <ChatSection />
    </div>
  );
};

export default Home;
