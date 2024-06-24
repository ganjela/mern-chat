import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = ({currentChat, setCurrentChat, setIsSideBarVisible}) => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
					currentChat={currentChat}
					setCurrentChat={setCurrentChat}
					setIsSideBarVisible={setIsSideBarVisible}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;