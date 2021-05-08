
const chatList=document.querySelector('.chat-list');
const newChatForm=document.querySelector('.new-chat');


newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(()=>newChatForm.reset())
    .catch((err)=>console.log(err));

})


const chatUI=new ChatUI(chatList);
const chatroom=new Chatroom('general','lalit');

chatroom.getChats((data)=>{
    chatUI.render(data);
});