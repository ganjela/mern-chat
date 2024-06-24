import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	const [currentChat, setCurrentChat] = useState(false);
	const [isSideBarVisible, setIsSideBarVisible] = useState(true)
	return (
		<div className='flex w-full h-screen md:h-[550px] md:w-fit rounded-lg overflow-hidden fixed top-0 left-0 md:static bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar currentChat={currentChat} setCurrentChat={setCurrentChat} isSideBarVisible={isSideBarVisible} setIsSideBarVisible={setIsSideBarVisible} />
			<MessageContainer currentChat={currentChat} setIsSideBarVisible={setIsSideBarVisible} setCurrentChat={setCurrentChat} />
		</div>
	);
};
export default Home;