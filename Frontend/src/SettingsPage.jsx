import "./SettingsPage.css";

function SettingsPage({ onBack }) {
    return (
        <div className="settingsPage">
            <div className="settingsContainer">
                <div className="settingsHeader">
                    <div className="headerLeft">
                        <button onClick={onBack} className="backButton">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <h1>Settings</h1>
                    </div>
                    <div className="headerRight">
                        <span className="version">v1.0.0</span>
                    </div>
                </div>
                
                <div className="settingsContent">
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <i className="fa-solid fa-palette"></i>
                            <h2>Appearance</h2>
                        </div>
                        <div className="cardContent">
                            <div className="settingRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Theme</label>
                                    <p className="settingDescription">Choose your preferred theme</p>
                                </div>
                                <div className="settingControl">
                                    <select className="settingSelect" defaultValue="dark">
                                        <option value="dark">Dark</option>
                                        <option value="light">Light</option>
                                        <option value="system">System</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="settingRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Font Size</label>
                                    <p className="settingDescription">Adjust the text size</p>
                                </div>
                                <div className="settingControl">
                                    <select className="settingSelect" defaultValue="medium">
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settingsCard">
                        <div className="cardHeader">
                            <i className="fa-solid fa-comments"></i>
                            <h2>Chat Preferences</h2>
                        </div>
                        <div className="cardContent">
                            <div className="settingRow checkboxRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Show typing indicator</label>
                                    <p className="settingDescription">Display when AI is typing</p>
                                </div>
                                <div className="settingControl">
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggleSlider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="settingRow checkboxRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Auto-scroll messages</label>
                                    <p className="settingDescription">Automatically scroll to new messages</p>
                                </div>
                                <div className="settingControl">
                                    <label className="toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggleSlider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settingsCard">
                        <div className="cardHeader">
                            <i className="fa-solid fa-user"></i>
                            <h2>Account</h2>
                        </div>
                        <div className="cardContent">
                            <div className="settingRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Language</label>
                                    <p className="settingDescription">Interface language</p>
                                </div>
                                <div className="settingControl">
                                    <select className="settingSelect" defaultValue="english">
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="settingRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Account</label>
                                    <p className="settingDescription">user@example.com</p>
                                </div>
                                <div className="settingControl">
                                    <button className="logoutBtn">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settingsCard">
                        <div className="cardHeader">
                            <i className="fa-solid fa-shield"></i>
                            <h2>Privacy & Security</h2>
                        </div>
                        <div className="cardContent">
                            <div className="settingRow checkboxRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Data collection</label>
                                    <p className="settingDescription">Help improve CodifyGPT</p>
                                </div>
                                <div className="settingControl">
                                    <label className="toggle">
                                        <input type="checkbox" />
                                        <span className="toggleSlider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="settingRow">
                                <div className="settingInfo">
                                    <label className="settingLabel">Clear chat history</label>
                                    <p className="settingDescription">Delete all conversation data</p>
                                </div>
                                <div className="settingControl">
                                    <button className="dangerBtn">
                                        <i className="fa-solid fa-trash"></i>
                                        Clear Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;