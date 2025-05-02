import React from 'react'
import { Plus , UserRound, UserCheck, UserRoundSearch } from 'lucide-react'

function Famille() {
  return (
    <div className='px-4 p-4'>
        <div className='flex flex-wrap justify-between py-4'>
            <h1 className='text-|28px] leading-|34px] font-bold text-[#5a5c69]'>Membre Famille</h1>
            <button className='px-5 py-3 bg-gradient-to-r  from-teal-600 to-teal-800 text-white rounded-md flex gap-2'> <Plus size={25} />Ajout </button>
        </div>
        <div className=' bg-white px-2 py-3 rounded-lg shadow-md'>
        <table className="min-w-full table-fixed  px-4 py-4 space-y-10 w-full p-3 bg-white rounded-lg">
  <thead>
    <tr>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Profil</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Nom</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Contact</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Email</th>
    </tr>
  </thead>
  <tbody className=' px-4 space-y-10'>
    <tr className='border-b-2'>
      <td className='px-24 flex gap-2'><button className='px-3 py-3 bg-gray-300 text-black rounded-full border border-gray-600'><UserRound size={25}/></button><span className='px-2 py-3 text-[#5a5c69]'> Mahery</span></td>
      <td className='px-6 py-4'>Malcolm Lockyer</td>
      <td className='px-6 py-4'>02444444</td>
      <td className='px-6 py-4'>mahery@gmail.com</td>
    </tr>
    <tr className='border-b-2'>
    <td className='px-24 flex gap-2'> <button className='px-3 py-3 bg-gray-200 text-black rounded-full border border-gray-600'><UserCheck size={25}/></button><span className='px-2 py-3 text-[#5a5c69]'> Faniriana</span></td>
      <td className='px-6 py-4'>The Eagles</td>
      <td className='px-6 py-4'>02544444</td>
      <td className='px-6 py-4'>narindra@gmail.com</td>
    </tr>
    <tr className='border-b-2'>
    <td className='px-24 flex gap-2'><button className='px-3 py-3 bg-gray-400 text-black rounded-full border border-gray-600'><UserRoundSearch  size={25}/></button><span className='px-2 py-3 text-[#5a5c69]'> Fitahiana</span></td>
      <td className='px-6 py-4'>Earth, Wind, and Fire</td>
      <td className='px-6 py-4'>0770777</td>
      <td className='px-6 py-4'>fitiavana@gmail.com</td>
    </tr>
  </tbody>
</table>
 
        </div>
    </div>
  )
}

export default Famille
