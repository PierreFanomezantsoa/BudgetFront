import React from 'react'

function DetailRevenue() {
  return (
    <div className=' space-y-2'>
        <h1 className='text-start text-teal-500 font-bold underline underline-offset-8 '>Revenue </h1>
      <div className='text-sm  grid-cols-1 space-y-6 font-semibold '>
        <div className='col-span-1'>
            Revenue par jours qui detail touts les revenue . 
        </div>
        <div className='col-span-1'>
        Revenue par semaine : qui informe toutes les revenue par semaine
        </div>
        <div className='col-span-1'>
        Revenue par mois : Toutes les revenue par mois avec statistique revenue.
        </div>
        <div className='col-span-1'>
        Revenue par année : qui informe toute revenue et statistique par annéé
        </div>
      </div>
    </div>
  )
}

export default DetailRevenue
