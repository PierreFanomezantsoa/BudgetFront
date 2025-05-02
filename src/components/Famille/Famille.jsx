import React from 'react'
import { Plus , UserRound, UserCheck, UserRoundSearch } from 'lucide-react'

function Famille() {
  return (
    <div className='px-4 p-4'>
      <div className='flex flex-wrap justify-between py-4'>
        <h1 className='text-[28px] leading-[34px] font-bold text-[#5a5c69]'>Membre Famille</h1>
        <button className='px-5 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-md flex gap-2'> <Plus size={25} />Ajout </button>
      </div>
      <div className='bg-white px-2 py-3 rounded-lg shadow-md overflow-x-auto'> 
        <table className="min-w-full table-fixed w-full bg-white rounded-lg"> 
          <thead>
            <tr>
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Profil</th> 
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left block'>Nom</th>
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Contact</th>
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'> 
              <td className='px-6 py-2 flex gap-2 items-center'> 
                <button className='px-3 py-2 bg-gray-300 text-black rounded-full border border-gray-600'><UserRound size={20}/></button> {/* Réduction de la taille de l'icône et du padding du bouton */}
                <span className='text-[#5a5c69]'> Mahery</span>
              </td>
              <td className='px-6 py-2'>Malcolm Lockyer</td> 
              <td className='px-6 py-2'>02444444</td>
              <td className='px-6 py-2'>mahery@gmail.com</td>
            </tr>
            <tr className='border-b'>
              <td className='px-6 py-2 flex gap-2 items-center'>
                <button className='px-3 py-2 bg-gray-200 text-black rounded-full border border-gray-600'><UserCheck size={20}/></button>
                <span className='text-[#5a5c69]'> Faniriana</span>
              </td>
              <td className='px-6 py-2'>The Eagles</td>
              <td className='px-6 py-2'>02544444</td>
              <td className='px-6 py-2'>narindra@gmail.com</td>
            </tr>
            <tr className='border-b'>
              <td className='px-6 py-2 flex gap-2 items-center'>
                <button className='px-3 py-2 bg-gray-400 text-black rounded-full border border-gray-600'><UserRoundSearch size={20}/></button>
                <span className='text-[#5a5c69]'> Fitahiana</span>
              </td>
              <td className='px-6 py-2'>Earth, Wind, and Fire</td>
              <td className='px-6 py-2'>0770777</td>
              <td className='px-6 py-2'>fitiavana@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Famille