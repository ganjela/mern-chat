import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { BiArrowBack } from "react-icons/bi";


const MessageContainer = ({currentChat, setCurrentChat, setIsSideBarVisible}) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	const handleChatClose = () => {
		setCurrentChat(false);
		setIsSideBarVisible(true);
		setSelectedConversation(null);
	}
	
	return (
		<div className={`md:min-w-[450px] ${currentChat ? "w-full h-full" : "hidden"} flex-col md:flex md:static`}
>
			{!selectedConversation? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-stone-500 px-4 py-2 mb-2 flex items-center justify-between'>
						<div>
							<span className='label-text'>To:</span>{" "}
							<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
						</div>
						<BiArrowBack className="block cursor-pointer md:hidden" onClick={handleChatClose} />
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} 🎃</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
}