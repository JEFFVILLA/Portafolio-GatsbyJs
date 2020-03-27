import React from "react";

export default () => (
    <form className="mt-16 text-center">
        <label for="contact-form" className="block text-gray-700 text-sm font-bold mb-2" >Dime tus idea para hacerla realidad</label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea id="contact-form" name="contact-form" 
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline">
            </textarea>
        </div>
        <div>
            <button className="btn px-4 mt-5" >Enviar</button>
        </div>
        
    </form>
  )