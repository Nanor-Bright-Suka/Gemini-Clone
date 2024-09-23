import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
      await onSent(prompt)
      setRecentPrompt(prompt)
    }
      // 
  return (
    <div className={`inline-flex  flex-col bg-[#f0f4f9] 
    justify-between  p-5  cursor-pointer min-h-screen 
    fixed top-0 left-0 mr-36 ${extended ? 'sidebar-extended' : 'sidebar-collapsed'}`}
    >
        <div>  
      <div>
 <img src={assets.menu_icon} alt="Menu Icon" 
 className='w-[25px]' onClick={()=> setExtended(prev => !prev)} />
      </div>
      <div className='inline-flex gap-6  mt-8 bg-[#e6eaf1] rounded-md px-2 py-1' onClick={() => newChat()}>
        <img src={assets.plus_icon} alt="Plus Icon" className='w-[25px]' />
        { extended ?  <p className='m-auto text-gray-700'>New Chat</p> : null}
      </div>
      {
        extended ? 
        <div className='flex flex-col mt-2'>
        <p className='m-2'>Recent</p>
        {prevPrompt.map((item,index) => {
          return (
        <div className='flex gap-3 
         hover:bg-[#e6eaf1] px-2 
         py-3 rounded-md h-52 ' key={index} onClick={()=> loadPrompt(item)}> 
        <img src={assets.message_icon} alt="Message Icon" className='w-[25px] h-[25px]'/>
         <p>{item.slice(0,12)} ....</p> 
        </div>
          )
        })}
     </div> : null
      }
        
      </div>

      <div className='flex flex-col'>
        <div className='flex gap-5  hover:bg-[#e6eaf1] px-2 py-3 rounded-md'>
        <img src={assets.question_icon} alt="Question Tag" className='w-[25px] '/>
      { extended ? <p>Help</p> : null}
        </div>
        <div className='flex gap-5  hover:bg-[#e6eaf1] px-2 py-3 rounded-md'>
        <img src={assets.history_icon} alt="History Icon" className='w-[25px] '/>
        {extended ? <p>Activity</p> : null}
        </div>
        <div className='flex gap-5  hover:bg-[#e6eaf1] px-2 py-3 rounded-md'>
        <img src={assets.setting_icon} alt="Setting Icon" className='w-[25px]'/>
        { extended ? <p>Settings</p> : null}
        </div>
        </div>
      </div>
    
  )
}

export default Sidebar
