import React from 'react'

function detailDepense() {
  return (
    <div className=' space-y-2'>
        <h1 className='text-start text-teal-500 font-bold underline underline-offset-8 '>Dépense </h1>
      <div className='text-sm  grid-cols-1 space-y-6 font-semibold '>
        <div className='col-span-1'>
            Depénse par jours qui detail touts les depense . 
        </div>
        <div className='col-span-1'>
            Depénse par semaine : qui informe toutes les depense par semaine
        </div>
        <div className='col-span-1'>
            Depénse par mois : Toutes les depense par mois avec statistique depenses.
        </div>
        <div className='col-span-1'>
             Depénse par année : qui informe toute depense et statistique par annéé
        </div>
      </div>
    </div>
  )
}

export default detailDepense
