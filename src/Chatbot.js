import React, { useState } from "react";
import { FaRobot } from "react-icons/fa"; // Import a robot icon
import "./Chatbot.css";

const Chatbot = () => {
    const [chatbotVisible, setChatbotVisible] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    const calendlyLink = "https://calendly.com/neerajrghate"; // Add your Calendly link here

    const handleChatToggle = () => {
        setChatbotVisible(!chatbotVisible);
        if (!chatbotVisible) {
            setChatMessages([
                { user: "Bot", text: "Hi there! How can I help you today?" },
            ]);
            setShowOptions(true);
        }
    };

    const handleOptionClick = (option) => {
        if (option === "resume") {
            setChatMessages((prev) => [
                ...prev,
                { user: "You", text: "Provide me your resume" },
                { user: "Bot", text: "Sure! Here is my resume:" },
            ]);
            setShowOptions(false);
            setTimeout(() => {
                setChatMessages((prev) => [
                    ...prev,
                    {
                        user: "Bot",
                        text: (
                            <a
                                href="/Neeraj_Ghate_Resume.pdf"
                                download="Neeraj_Ghate_Resume.pdf"
                                style={{ color: "blue", textDecoration: "underline" }}
                            >
                                Download Resume
                            </a>
                        ),
                    },
                ]);
            }, 500);
        } else if (option === "meeting") {
            setChatMessages((prev) => [
                ...prev,
                { user: "You", text: "Schedule a meeting with me" },
                {
                    user: "Bot",
                    text: (
                        <a
                            href={calendlyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "blue", textDecoration: "underline" }}
                        >
                            Click here to schedule a meeting with me
                        </a>
                    ),
                },
            ]);
            setShowOptions(false);
        }
    };

    return (
        <>
            <button className="chatbot-button" onClick={handleChatToggle}>
                Chat with Me
            </button>

            {chatbotVisible && (
                <div className="chatbot">
                    <div className="chatbot-header">Ask Me a Question!</div>
                    <div className="chatbot-messages">
                        {chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot-message ${msg.user === "You" ? "user" : "bot"
                                    }`}
                            >
                                {msg.user === "Bot" && (
                                    <FaRobot
                                        size={20}
                                        style={{
                                            marginRight: "10px",
                                            verticalAlign: "middle",
                                            color: "#6a11cb",
                                        }}
                                    />
                                )}
                                <strong>{msg.user === "You" ? "You:" : ""}</strong>{" "}
                                {typeof msg.text === "string" ? msg.text : msg.text}
                            </div>
                        ))}
                    </div>
                    {showOptions && (
                        <div className="chatbot-options">
                            <button
                                className="chatbot-option-button"
                                onClick={() => handleOptionClick("resume")}
                            >
                                Provide me your resume
                            </button>
                            <button
                                className="chatbot-option-button"
                                onClick={() => handleOptionClick("meeting")}
                            >
                                Schedule a meeting with me
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Chatbot;
