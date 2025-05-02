import React from 'react'
import { Trash2 , Plus, FilePenLine  } from 'lucide-react'

function DonneeDepense() {
  const data=[
    {
      nom: "mety",
      prenom : "mahery",
      Contact: "0369845",
      email:"maheriniaina@gmail.com"
    },
    {
      nom: "mety",
      prenom : "mahery",
      Contact: "0369845",
      email:"maheriniaina@gmail.com"
    },
    {
      nom: "mety144",
      prenom : "mahery",
      Contact: "0369845",
      email:"maheriniaina@gmail.com"
    },
    {
      nom: "mety478",
      prenom : "mahery",
      Contact: "0369845",
      email:"maheriniaina@gmail.com"
    },
  ]
  return (
    <div className='px-4 p-4'>
        <div className='flex flex-wrap justify-between py-4'>
            <h1 className='text-|28px] leading-|34px] font-bold text-[#5a5c69]'>Liste depense</h1>
            <button className='px-5 py-3 bg-gradient-to-r  from-teal-600 to-teal-800 text-white rounded-md flex gap-2'><Plus  size={25}/> Ajout </button>
        </div>
        <div className=' bg-white px-2 py-3 rounded-lg shadow-md'>
        <table className="min-w-full table-fixed  px-4 py-4 space-y-10 w-full p-3 bg-white rounded-lg">
  <thead>
    <tr>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Montant</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Type</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Déscription</th>
      <th className='border-b-2 px-6 py-4 border-gray-600'>Action</th>
    </tr>
  </thead>
  <tbody className=' px-4 space-y-10'>
    {data.map( depense=>(
      <tr className=' border-b-2' key={depense}>
         <td className="px-6 py-4 ">{depense.nom}</td>
         <td className="px-6 py-4 text-center">{depense.email}</td>
         <td className="px-6 py-4 text-center">{depense.Contact}</td>
         <td className='flex gap-x-2 py-2 justify-center'>
          <button className='bg-gradient-to-r  from-blue-400 to-blue-600  px-3 py-2 text-white rounded-md font-semibold'><FilePenLine  size={25}/></button>
         <button className='bg-gradient-to-r  from-red-400 to-red-600  px-3 py-2 font-semibold text-white rounded-md'> <Trash2 size={25}/></button></td>
      </tr>
    ))}
  </tbody>
</table>
 
        </div>
    </div>
  )
}

export default DonneeDepense
