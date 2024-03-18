import React,{useState} from 'react'
import "./Home.css"
import I18n from  '../../Utils/I18n'

function Home() {

  const [lang, setLang] = useState("en");
  
  return (
   <div>
    <h1>{I18n( "WelcomeMessage")}</h1>

    <select 
     defaultValue={localStorage.getItem("lang")}
     onChange={(e)=>{
      localStorage.setItem("lang",e.target.value);
      window.location.reload();
    }}>
      <option value="mr">Marathi</option>
      <option value="hi">Hindi</option>
      <option value="en">English</option>
    </select>

  
   </div>
  )
}

export default Home
