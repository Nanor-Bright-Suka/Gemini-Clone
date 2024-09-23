
import { createContext, useState } from "react";
import run from "../Config/gemini";
    //Creating The Context
 export const Context = createContext()

 //The Context Provider

 const ContextProvider = (props) => {
        //State Variables 
        const [input, setInput] = useState("")
        const [recentPrompt,setRecentPrompt] = useState("")
        const [prevPrompt,setPrevPrompt] = useState([])
        const [showResults, setShowResults] = useState(false)
        const [loading,setLoading] = useState(false)
        const [resultsData, setResultsData]  = useState("")
        // const [disable,setDisable] = useState(true)


        //Disbling The Button when there is nothing in the input box
        //         if(input.trim()){
        //     setDisable(true)
        // }else {
        //     setDisable(false)
        // }

            const delayPara = (index,nextWord) => {
                setTimeout(()=> {
                        setResultsData(prev => prev + nextWord)
                }, 20 * index)
            }

        // New Chat 
        const newChat = () => {
        setLoading(false)
        setShowResults(false)
        }

    const onSent = async(prompt) => {
        setResultsData(" ")
        setLoading(true)
        setShowResults(true)
        let response;
        if(prompt !== undefined){
         response = await run(prompt)
        setRecentPrompt(prompt)
        }else {
        setPrevPrompt(prev => [...prev,input])
        setRecentPrompt(input)
        response = await run(input)
         }

      const responseArray = response.split("**")
      let newResponse = "";
      for(let i = 0; i < responseArray.length; i++){
        if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i]
        }else{
            newResponse += "<b>"+responseArray[i]+"</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join(' ')
    //   setResultsData(newResponse2)
    const newResponseArray = newResponse2.split("")
    for(let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i]
            delayPara(i, nextWord)
    }
      setLoading(false)
      setInput("")
    }
    



    const ContextValue = {
            prevPrompt,
            setPrevPrompt,
            onSent,
            input,
            setInput,
            recentPrompt,
            setRecentPrompt,
            showResults,    // boolean
            loading,  //boolean
            resultsData,
            newChat,
            // disable
            //The setter functions of all the boolean are excluded
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
 }
export default ContextProvider