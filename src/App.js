import { useState,useEffect, useRef, useLayoutEffect } from "react";
import { BiArrowToRight } from "react-icons/bi";
import {TfiAlignJustify  } from "react-icons/tfi";
import { Subheading } from "./Subheading";
import { Title } from "./Title";
import {gsap} from "gsap"
import './App.css'
function App() {
  const [display1,setDisplay1]=useState("flex")
  const [display2,setDisplay2]=useState("none")
  const [theme,setTheme]=useState("leo")
  const [stateswitch,setstateswitch]=useState("end");
  const titleRef =useRef()
  const overlayref=useRef()
  const [showdiv,setDiv]=useState(false)
  const [z_index1,setZ_index1]=useState(100)
  const [z_index2,setZ_index2]=useState(999)
  const [z_index3,setZ_index3]=useState(100)
  const[selecteddiv,setSelecteddiv]=useState("leo")
  const [leftimg,setLeftimg]=useState("1.png")
  const[middleimg,setMiddleimg]=useState("2.png")
  const[rightimg,setRightimg]=useState("3.png")
  const[hidechat,setHidechat]=useState(true)

 const handlethemeswitch=()=>{
  localStorage.setItem("theme",selecteddiv)
  setTheme(localStorage.getItem("theme"))
  setHidechat(!hidechat)
 
 }

 const handleDropbox1=()=>{
  setDisplay1("none")
  setDisplay2("flex")
}
const handleDropbox2=()=>{
  setDisplay1("flex")
  setDisplay2("none")
}
 useLayoutEffect(()=>{
  let mm=gsap.matchMedia()
  mm.add("(min-width:768px)",()=>{
   gsap.to(titleRef.current,{
     y:'10',
     duration:1
   })
  })

})
gsap.context(()=>{
  //
})
useEffect(()=>{
 
  if(theme==="leo")
  {
    setLeftimg("lex.png")
    setMiddleimg("leo.png")
    setRightimg("ash.png")
  }
  else if (theme==="lex")
  {
    setLeftimg("leo.png")
    setMiddleimg("lex.png")
    setRightimg("ash.png")
  }
  else{
    setLeftimg("lex.png")
    setMiddleimg("ash.png")
    setRightimg("leo.png")
  }
},[theme])
console.log(selecteddiv,theme);
  return (
   
    <div className=" bg-gradient-to-b from-black to-gray-950 h-screen w-screen text-white" >
      
      <div className="header h-[10%] w-screen flex flex-row pt-[4%] opacity-[37%] hover:opacity-100">
        <div className="h-[10%] w-[35%] pl-[5%] ">
          <img src="logo_hestia.png" className="h-[40px] w-auto "/>
     
      </div>
      <div className="h-[10%] w-[65%]  ">
        <div className="md:pl-[90%] lg:pl-[80%]" style={{display:display1}}>
        <TfiAlignJustify  onClick={handleDropbox1}/> 
        </div>
        <div className="pl-[70%] flex flex-row items-center" style={{display:display2}}>
      <BiArrowToRight/>
      <a href="https://react-icons.github.io/react-icons/icons?name=tfi" >Login</a>
      <div className="ml-[20px]">
      <TfiAlignJustify onClick={handleDropbox2} /></div>
      </div>
      </div>
      </div>
      <div className="body h-[55%] w-screen">
        <div className="md:px-[10%] lg:px-[20%] py-10 "> <Subheading className="text-base"/></div>
        
       <div className=" relative top-6 left-[1%] w-[64%] h-auto ml-[20%]"><Title fill={"#800000"} theme={theme}/></div>
       <div className=" absolute top-[28%]  w-[64%] h-auto ml-[20%]" ref={titleRef}><Title fill={"#D5BA95"} theme={theme}/></div>
       
       
      </div>
      <div className="mascots absolute flex flex-row w-screen h-[43%] top-[54%]  ">
        <div className="lex h-[280px] absolute left-[25%] top-16 z-[100] hover:h-[290px]" style={{zIndex:z_index1}}><button className="mascot" onClick={()=>{setDiv(!showdiv)
        setZ_index1(1100)
        setZ_index2(999)
        setZ_index3(100)
        setHidechat(true)
        if(theme==="leo")
        setSelecteddiv("lex")
        else if (theme==="lex")
        setSelecteddiv("leo")
        else
        setSelecteddiv("lex")
        setstateswitch("end")}}><img src={leftimg} className="h-[280px] w-auto ease-in duration-100 ... hover:h-[296px]"/></button></div>
        <div className="leo h-[350px] absolute md:left-[40%] lg:left-[38%] z-[999] hover:h-[360px] " style={{zIndex:z_index2}}><button onClick={()=>{setDiv(!showdiv)
        setZ_index2(1100)
        setZ_index1(100)
        setZ_index3(100)
        setHidechat(true)
        if(theme==="leo")
        setSelecteddiv("leo")
        else if(theme==="lex")
        setSelecteddiv("lex")
        else
        setSelecteddiv("ash")
        setstateswitch("middle")}}><img src={middleimg} className="h-[350px] w-auto ease-in duration-100 ... hover:h-[360px] "/></button></div>
        <div className="ash h-[280px] absolute md:left-[65%] lg:left-[54%] top-16 z-[100] hover:h-[290px]" style={{zIndex:z_index3}}><button onClick={()=>{setDiv(!showdiv)
         setZ_index3(1100)
         setZ_index1(100)
        setZ_index2(100)
        setHidechat(true)
        if(theme==="leo")
        setSelecteddiv("ash")
        else if(theme==="lex")
        setSelecteddiv("ash")
        else
        setSelecteddiv("leo")
        setstateswitch("end")}}><img src={rightimg} className="h-[280px] w-auto ease-in duration-100 ... hover:h-[296px]"/></button></div>

       </div>
      { showdiv && <div className="absolute  w-screen h-[43%] top-[54%] bg-gradient-to-t from-black to-transparent z-[1000] "></div>}
       <div className="w-screen h-[10%] relative top-[25%]  bg-gradient-to-t from-black to-transparent z-[1200]" ref={overlayref}></div>
       { showdiv&&hidechat && <div className="myDiv absolute h-[35%] w-[35%] border-white rounded-md border-[1px] top-[19%] left-[30%] bg-black" >
         {stateswitch!=="middle" &&<div className="absolute right-6 border-[1px] border-white mt-3" >
          <button onClick={handlethemeswitch} >Switch to {selecteddiv}</button>
        </div>}
        <div>{selecteddiv==="leo"? "I am leo":selecteddiv==="lex" ? "I am lex":" I am ash"  }</div>
      </div>}
  
    
    </div>
    
  );
}

export default App;
