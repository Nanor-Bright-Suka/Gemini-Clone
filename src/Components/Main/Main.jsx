import React, { useContext} from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'


    const Main = () => {
        
        const {
        onSent,
     recentPrompt,
     showResults,
     loading,
     resultsData, 
     setInput, 
     input,
    //  disable,
        } = useContext(Context)

        
  return (

    <div className='h-screen relative flex-1 ml-20'>
        <div className='flex justify-between items-center '>
            <p className='ml-28'>Gemini</p>
            <img 
            src={assets.Profile} 
            alt="Picture" 
            className='w-[25px] rounded-full mr-16 mt-5'/>
        </div>

    <div className=' max-w-5xl m-auto h-auto mb-7 '>
        { !showResults ?
        <>
      <div className='text-5xl text-[#c4c7c5]'>
       <p className='pt-10 pb-1 '>
        <span 
        className='bg-clip-text text-transparent 
        bg-gradient-to-r from-[#4b90ff] 
        to-[#ff5546]'> Hello, Bright.</span></p>
      <p className='pb-10 '>How can I help you today ?</p>
     </div>

     <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]'>
        <div className='h-[150px]  p-3  relative m-2 rounded-md bg-[#f0f4f9] hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-xl'>Suggest beautiful places to see an upcoming road trip</p>
            <img src={assets.compass_icon} alt='Compass Icon' className='w-[25px] rounded-full absolute bottom-0 right-0 bg-white'/>
        </div>
        <div className= 'h-[150px] p-3 relative m-2 rounded-md bg-[#f0f4f9] hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-xl'>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt='Bulb Icon' className='w-[25px] rounded-full absolute bottom-0 right-0 bg-white'/>
        </div>
        <div className= 'h-[150px] p-3 relative m-2 rounded-md bg-[#f0f4f9] hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-xl'>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt='Message Icon' className='w-[25px] rounded-full absolute bottom-0 right-0 bg-white' />
        </div>
        <div className= 'h-[150px] p-3 relative m-2 rounded-md bg-[#f0f4f9] hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-xl'>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt='Code Icon' className='w-[25px] rounded-full absolute bottom-0 right-0 bg-white' />
        </div>
     </div>
     </> : <div className="px-[2%] h-[70vh] overflow-scroll scrollbar-hide"> 
        <div className='flex gap-8 mb-5 items-center'>
            <img src={assets.Profile} className='w-[25px] rounded-full' />
            <p>{recentPrompt}</p>
        </div>
        <div className='flex gap-5'>
            <img src={assets.gemini_icon}  className='w-[40px] h-[40px] rounded-full'/>
           { loading ? (
            <div className='w-[100%]'> 
            <div className='flex gap-4 flex-col'> 
                <hr 
                className='h-[20px] bg-[#f6f7f8] bg-gradient-to-r
                 from-[#9ed7ff] to-[#ffffff] rounded-full
                 animate-pulse' />
                <hr className='h-[20px] bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] rounded-full animate-pulse' />
                <hr className='h-[20px] bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] rounded-full animate-pulse' />
            </div>
            </div>
           ) : (
                <>
        <p dangerouslySetInnerHTML={{__html:resultsData}} className='leading-loose text-xl'></p>
        </>
           )
        }
        </div>
     </div>
     }
            {/* Input Box */}
     <div className='bottom-0 fixed flex justify-center items-center flex-col mx-auto '>
        <div className='flex bg-[#f0f4f9] justify-center items-center py-2  px-1 w-[100%] 
        rounded-full cursor-pointer border-2 mb-4
         border-neutral-800 '>
            <input 
            type="text" 
            placeholder='Enter a prompt here' 
            className='w-[60%] h-auto outline-none px-2 text-2xl flex-1
             focus:border-none rounded-full bg-transparent overflow-scroll' 
             onChange={(e) => setInput(e.target.value)} 
             value={input} />
            <div className='flex'>
                <img src={assets.send_icon} alt="Send Icon" 
                className={`w-[40px] cursor-pointer ${input ? 'opacity-100 ': "opacity-50 cursor-not-allowed"}`} onClick={input ? () => onSent() : null} />
            </div>
        </div>
        <p className='text-center bottom-0  max-[640px]:hidden '>Gemini may display inaccurate info,including about people
        so double check it responses. 
     </p>
     </div>
      </div>
    
    </div>
    
  
  )
}

export default Main
