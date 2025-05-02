import React from 'react'
import { Plus } from 'lucide-react'

function DonneeRevenue() {
  return (
    <div className='px-4 p-4'>
      <div className='flex flex-wrap justify-between py-4'>
        <h1 className='text-[28px] leading-[34px] font-bold text-[#5a5c69]'>Liste Révenue</h1>
        <button className='px-5 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-md flex gap-2'> <Plus size={25} />Ajout </button>
      </div>
      <div className='bg-white px-2 py-3 rounded-lg shadow-md overflow-x-auto'> {/* Ajout de overflow-x-auto */}
        <table className="min-w-full table-fixed w-full bg-white rounded-lg"> {/* Suppression de px-4 py-4 space-y-10 p-3 */}
          <thead>
            <tr>
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Montant</th> {/* py-3 pour réduire le padding vertical */}
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Type</th>
              <th className='border-b-2 px-6 py-3 border-gray-600 text-left'>Déscription</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'> {/* border-b au lieu de border-b-2 pour une ligne moins épaisse */}
              <td className='px-6 py-2'>$100</td> {/* py-2 pour réduire le padding vertical */}
              <td className='px-6 py-2'>Malcolm Lockyer</td>
              <td className='px-6 py-2'>Achats PPN</td>
            </tr>
            <tr className='border-b'>
              <td className='px-6 py-2'>$800</td>
              <td className='px-6 py-2'>The Eagles</td>
              <td className='px-6 py-2'>Réparation voiture</td>
            </tr>
            <tr className='border-b'>
              <td className='px-6 py-2'>$900</td>
              <td className='px-6 py-2'>Earth, Wind, and Fire</td>
              <td className='px-6 py-2'>Cotisation par mois</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DonneeRevenue