import React from "react";
import Illustration from "../img/img_principal.svg"
import Form from './contact.form';
export default () => (
  <header className="bg-gray-200">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-500 text-6xl"> !Hola! soy Jeffri</h1>
          <p className="text-xl text-gray-700">Desarrollador Junior Front-End.</p>  
        </div> 
        <img src={Illustration} alt="Hombre desarrolando Aplicación Web" style={{height: "300px"}}></img>
       
      </div>
      <div>
          <Form/>  
      </div>
    </div>
  </header>
)
