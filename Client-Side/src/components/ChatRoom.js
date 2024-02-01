import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import ChatBox from './ChatBox';
import MemberList from './MemberList';
import ChatContent from './ChatContent';
import RegistrationForm from './RegistrationForm';

var stompClient = null;

const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
    });

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));
                }
            break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
            }
    }

    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }
        else{
        let list =[];
        list.push(payloadData);
        privateChats.set(payloadData.senderName,list);
        setPrivateChats(new Map(privateChats));
        }
    }

    const onError=(err)=>{
        console.log(err);   
    }

    const registerUser=()=>{
        connect();
    }

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }
        
    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
        userJoin();
    }
        
    const userJoin=()=>{
        var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const sendValue=()=>{
        if (stompClient) {
            var chatMessage = {
            senderName: userData.username,
            message: userData.message,
            status:"MESSAGE"
        };
        console.log(chatMessage);
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
        setUserData({...userData,"message": ""});
        }
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const sendPrivateValue=()=>{
        if (stompClient) {
            var chatMessage = {
            senderName: userData.username,
            receiverName:tab,
            message: userData.message,
            status:"MESSAGE"
        };
                  
        if(userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
        }
        stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
            setUserData({...userData,"message": ""});
        }
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }

  return (
    <div className="container">
      {userData.connected ? (
        <ChatBox>
          <MemberList tab={tab} privateChats={privateChats} setTab={setTab} />
          <ChatContent
            tab={tab}
            publicChats={publicChats}
            privateChats={privateChats}
            userData={userData}
            handleMessage={handleMessage}
            sendValue={sendValue}
            sendPrivateValue={sendPrivateValue}
          />
        </ChatBox>
      ) : (
        <RegistrationForm userData={userData} handleUsername={handleUsername} registerUser={registerUser} />
      )}
    </div>
  );
};

export default ChatRoom;