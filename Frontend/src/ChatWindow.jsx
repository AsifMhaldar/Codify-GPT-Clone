import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import SettingsPage from "./SettingsPage.jsx";
import UpgradePlan from "./UpgradePlan.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function ChatWindow() {
    const { prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('chat');
    const [selectedModel, setSelectedModel] = useState('gpt-4');

    const llmModels = [
        { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model, great for complex tasks' },
        { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and cost-effective' },
        { id: 'claude-2', name: 'Claude 2', description: 'Excellent for long conversations' },
        { id: 'llama-2', name: 'Llama 2', description: 'Open source alternative' },
        { id: 'codify-special', name: 'Codify Special', description: 'Optimized for coding tasks' }
    ];

    const getReply = async () => {
        setLoading(true);
        setNewChat(false);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId,
                model: selectedModel
            })
        };

        try {
            const response = await fetch("http://localhost:8080/api/chat", options);
            const res = await response.json();
            setReply(res.reply);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                }, {
                    role: "assistant",
                    content: reply
                }]
            ));
        }
        setPrompt("");
    }, [reply]);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsModelOpen(false);
    }

    const handleModelClick = () => {
        setIsModelOpen(!isModelOpen);
        setIsProfileOpen(false);
    }

    const handleSettingsClick = () => {
        setIsProfileOpen(false);
        setCurrentPage('settings');
    }

    const handleUpgradeClick = () => {
        setIsProfileOpen(false);
        setCurrentPage('upgrade');
    }

    const handleBackToChat = () => {
        setCurrentPage('chat');
    }

    const handleModelSelect = (modelId) => {
        setSelectedModel(modelId);
        setIsModelOpen(false);
    }

    if (currentPage === 'settings') {
        return <SettingsPage onBack={handleBackToChat} />;
    }

    if (currentPage === 'upgrade') {
        return <UpgradePlan onBack={handleBackToChat} />;
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <div className="titleSection" onClick={handleModelClick}>
                    <span>CodifyGPT ({selectedModel}) <i className="fa-solid fa-chevron-down"></i></span>
                </div>
                <div className="userIconDiv" onClick={handleProfileClick}>
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>

            {/* Model Dropdown */}
            {isModelOpen && (
                <div className="modelDropdown">
                    {llmModels.map((model) => (
                        <div 
                            key={model.id}
                            className={`modelItem ${selectedModel === model.id ? 'active' : ''}`}
                            onClick={() => handleModelSelect(model.id)}
                        >
                            <div className="modelName">{model.name}</div>
                            <div className="modelDesc">{model.description}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Profile Dropdown */}
            {isProfileOpen && (
                <div className="dropDown">
                    <button className="btn" onClick={handleSettingsClick}>
                        <div className="dropDownItem">
                            <i className="fa-solid fa-gear"></i> Settings
                        </div>
                    </button>
                    <button className="btn" onClick={handleUpgradeClick}>
                        <div className="dropDownItem">
                            <i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan
                        </div>
                    </button>
                    <button className="btn">
                        <div className="dropDownItem">
                            <i className="fa-solid fa-right-from-bracket"></i> Log out
                        </div>
                    </button>
                </div>
            )}

            <Chat></Chat>

            <ScaleLoader color="#fff" loading={loading} />

            <div className="chatInput">
                <div className="inputBox">
                    <textarea 
                        placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                getReply();
                            }
                        }}
                        rows={1}
                    />
                    <div id="submit" onClick={getReply}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <p className="info">
                    CodifyGPT can make mistakes. Check important info.
                </p>
            </div>
        </div>
    )
}

export default ChatWindow;