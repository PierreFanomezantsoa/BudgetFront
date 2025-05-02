import {useEffect} from 'react'
import { X } from 'lucide-react'


function Modal({open, onClose, children}) {
  const exemple=async(e)=>{
    console.log(children)
  }
  useEffect(()=>{
    exemple();
  })
  return (
    
    <div onClick={onClose}
    className={`fixed inset-0 flex justify-center items-center
    transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e)=> e.stopPropagation()} 
      className={`bg-white rounded-xl 
      p-6 transition-all
      shadow-md ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <button className='absolute top-2 right-2 p-1 rounded-lg
        text-gray-400 bg-white hover:bg-red-400 hover:text-white
        ' onClick={onClose}><X/></button>
        {children}
      </div>
    </div>
  )
}

export default Modal
