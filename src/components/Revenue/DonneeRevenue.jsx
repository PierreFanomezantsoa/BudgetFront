import React from 'react'
import { Plus } from 'lucide-react'

function DonneeRevenue() {
  return (
    <div className='px-4 p-4'>
        <div className='flex flex-wrap justify-between py-4'>
            <h1 className='text-|28px] leading-|34px] font-bold text-[#5a5c69]'>Liste Révenue</h1>
            <button className='px-5 py-3 bg-gradient-to-r  from-teal-600 to-teal-800 text-white rounded-md flex gap-2'> <Plus size={25} />Ajout </button>
        </div>
        <div className=' bg-white px-2 py-3 rounded-lg shadow-md'>
        <table className="min-w-full table-fixed  px-4 py-4 space-y-10 w-full p-3 bg-white rounded-lg">
  <thead>
    <tr>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Montant</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Type</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Déscription</th>
    </tr>
  </thead>
  <tbody className=' px-4 space-y-10'>
    <tr className='border-b-2'>
      <td className='px-6 py-4'>$100</td>
      <td className='px-6 py-4'>Malcolm Lockyer</td>
      <td className='px-6 py-4'>Achants PPN</td>
    </tr>
    <tr className='border-b-2'>
      <td className='px-6 py-4'>$800</td>
      <td className='px-6 py-4'>The Eagles</td>
      <td className='px-6 py-4'>Reparration voiture</td>
    </tr>
    <tr className='border-b-2'>
      <td className='px-6 py-4'>$900</td>
      <td className='px-6 py-4'>Earth, Wind, and Fire</td>
      <td className='px-6 py-4'>Cotusation par mois</td>
    </tr>
  </tbody>
</table>
 
        </div>
    </div>
  )
}

export default DonneeRevenue
