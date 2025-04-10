import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import './Sidebar.css'

const Sidebar = () => {

    // State Variable
    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    // Loading Previous Prompts
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='Menu' />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt='New Chat' />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ?
                    <div className="recent">
                        <p className='recent-title'>Recent</p>

                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                    <img className='recent-icon' src={assets.message_icon} alt='Recent' />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}
                    </div> :
                    null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help"></img>
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity"></img>
                    {extended ? <p>Activity </p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings"></img>
                    {extended ? <p>Settings </p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar