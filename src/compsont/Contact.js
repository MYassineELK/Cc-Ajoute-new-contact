import React, { useEffect } from 'react'
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
  

export default function Contact(props) {
   
  return (
    <div>
 <div style={{display:props.desplay?"none":""}} className="block rounded-lg w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
  <a href="#!">
    <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt />
  </a>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {props.nom}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {props.télé}
      <br />
      {props.email}
    </p>
    <button type="button" onClick={()=>props.sup(props.id)} className="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
      supprime
    </button>
  </div>
</div>

    </div>
  )
}
