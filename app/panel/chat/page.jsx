'use client';

import { useState, useEffect, useRef } from "react";
import { Paperclip, PaperPlaneTiltIcon, Camera, Smiley, PlusCircle, Image as ImageIcon, FileText, MusicNotes, VideoCamera } from "@phosphor-icons/react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import AdminNavbar from "../../../components/admin-navbar";
import Footer from "../../../components/admin-footer";

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const employees = [
  { name: "Anand Jethava", image: "/image/profile.png", online: true },
  { name: "Ravi Sharma", image: "/image/profile.png", online: false },
  { name: "Priya Mehta", image: "/image/profile.png", online: true },
  { name: "Nikhil Patel", image: "/image/profile.png", online: true },
];

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(employees[0]);
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you today?", from: "them" },
    { text: "I wanted to discuss the project status.", from: "me" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const typingTimeout = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file here
      console.log('Selected file:', file);
      setShowAttachmentOptions(false);
    }
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    setTyping(true);
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => setTyping(false), 2000);
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, from: "me" }]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="flex">

        <main className="ml-64 mt-16 flex flex-col flex-1">
          <div className="flex h-[calc(100vh-7rem)]">
            {/* Sidebar - Employee List */}
            <div className="w-80 bg-white shadow-md border-r border-gray-200 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <h2 className="text-lg text-gray-800 font-semibold">Messages</h2>
                <button className="p-1 text-blue-500 hover:cursor-pointer hover:text-blue-500">
                  <PlusCircle size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {employees.map((emp, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedUser(emp)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition ${
                      selectedUser.name === emp.name ? "bg-gray-200" : ""
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={emp.image}
                        alt={emp.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                          emp.online ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></span>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-800 font-semibold">{emp.name}</h3>
                      <p className="text-xs text-gray-500">
                        {emp.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <div className="flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center gap-4 bg-white px-6 py-2 border-b border-gray-200 shadow-sm">
                <Image
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-lg text-gray-800 font-semibold">{selectedUser.name}</h2>
                  <p className="text-xs text-gray-500">
                    {selectedUser.online ? "Active now" : "Offline"}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-md px-4 py-2 rounded-xl text-sm shadow-md ${
                      msg.from === "me"
                        ? "ml-auto bg-blue-100 text-blue-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {typing && (
                  <div className="text-sm text-gray-500 italic">
                    {selectedUser.name} is typing...
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="border-t bg-white px-4 py-3 flex items-center gap-3 shadow-inner">
                <div className="relative flex">
                <button 
                  className="text-gray-500 hover:text-yellow-500"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smiley size={24} />
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-12 left-0 z-50">
                    <EmojiPicker
                      onEmojiClick={(emojiData) => {
                        setInput((prevInput) => prevInput + emojiData.emoji);
                        setShowEmojiPicker(false);
                      }}
                      width={300}
                      height={400}
                    />
                  </div>
                )}
              </div>
                <button className="text-gray-500 hover:text-blue-500">
                  <Camera size={24} />
                </button>
                <div className="relative">
                  <button 
                    className="text-gray-500 hover:text-purple-500"
                    onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
                  >
                    <Paperclip size={24} />
                  </button>
                  {showAttachmentOptions && (
                    <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg p-2 z-50">
                      <div className="flex flex-col text-black gap-2">
                        <button 
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
                          onClick={() => {
                            fileInputRef.current?.click();
                          }}
                        >
                          <FileText size={20} className="text-blue-500" />
                          <span>Document</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                          <ImageIcon size={20} className="text-green-500" />
                          <span>Image</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                          <MusicNotes size={20} className="text-yellow-500" />
                          <span>Audio</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
                          <VideoCamera size={20} className="text-red-500" />
                          <span>Video</span>
                        </button>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={handleTyping}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-4 py-2 text-black rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                <button
                  onClick={sendMessage}
                  className="text-gray-500 hover:text-green-500"
                >
                  <PaperPlaneTiltIcon size={24} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ChatPage;