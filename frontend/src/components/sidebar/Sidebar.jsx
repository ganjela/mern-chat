import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({currentChat, setCurrentChat, isSideBarVisible, setIsSideBarVisible}) => {
	return (
		<div className={`border-r border-stone-500 p-4 flex flex-col w-full relative h-screen md:h-auto md:visible ${isSideBarVisible ? "" : "hidden"} md:flex`}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations currentChat={currentChat} setCurrentChat={setCurrentChat} setIsSideBarVisible={setIsSideBarVisible} />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;