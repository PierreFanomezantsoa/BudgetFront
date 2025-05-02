import {useState} from "react";
import { BanknoteArrowDown , BanknoteX , CircleDollarSign , Bitcoin
    ,Ellipsis
} from 'lucide-react'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StatistAnneul from './StatistAnneul';
import Modal from '../Modal';
import { motion } from "motion/react";
import DetailDepense from "../Depense/detailDepense"
import DetailRevenue from "../Revenue/DetailRevenue";

const data = [
  {
    name: 'Lundi ',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mardi',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mercedi',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Vendredi',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Samedi',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dimache',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
];


function PageDepense() {
  const [open, setOpen]= useState(false);
  return (
    <div className='pt-[25px] px-[25px] '>
     <div className='flex items-center flex-wrap justify-between py-2 gap-y-4 p-2 px-8 md:px-0'>
    <h1 className='text-[#5a5c69] text-|28px] leading-|34px]
      cursor-pointer font-bold'>Budget mensuel</h1>
    <button className='bg-gradient-to-r  from-teal-600 to-teal-800   py-3 rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'
    onClick={()=>setOpen(true)}>details budgets</button>
     </div>
     <motion.div
     variants={{
      hidden :{opacity: 0},
      show:{
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
        },
      }
     }}
     initial="hidden"
     animate="show"
     className='grid md:grid-cols-4 grid-cols-1 gap-[30px] mt-[25px] pb-[15px] gap-y-2'>
        <motion.div
        variants={{hidden: {opacity: 0}, show:{opacity: 1}}}
        className='h-[100px] rounded-[8px] bg-white
         border-l-[4px] border-[#de5c42] flex items-center justify-between
         px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
         transition duration-300 ease-in'>
            <div>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Dépense</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$1500</h1>
            </div>
            <BanknoteX  />
        </motion.div>
        <motion.div
        variants={{hidden: {opacity: 0}, show:{opacity: 1}}}
        className='h-[100px] rounded-[8px] bg-white
         border-l-[4px] border-[#4E73DF] flex items-center justify-between
         px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
         transition duration-300 ease-in'>
            <div>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Revenue</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$1800</h1>
            </div>
            <CircleDollarSign />
        </motion.div>
        <motion.div
        variants={{hidden: {opacity: 0}, show:{opacity: 1}}} className='h-[100px] rounded-[8px] bg-white
         border-l-[4px] border-[#d36a36] flex items-center justify-between
         px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
         transition duration-300 ease-in'>
            <div>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Totat dépense</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$2500</h1>
            </div>
            <BanknoteArrowDown/>
        </motion.div>
        <motion.div
        variants={{hidden: {opacity: 0}, show:{opacity: 1}}}
         className='h-[100px] rounded-[8px] bg-white
         border-l-[4px] border-green-500 flex items-center justify-between
         px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
         transition duration-300 ease-in'>
            <div>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Total revenue</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$2900</h1>
            </div>
            <Bitcoin />
        </motion.div>

     </motion.div>
     <motion.div 
       variants={{
        hidden :{opacity: 0},
        show:{
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        }
       }}
       initial="hidden"
       animate="show"
      className='grid md:grid-cols-2 grid-cols-1 gap-[30px] mt-[15px] pb-[15px]'>
        <motion.div variants={{hidden: {opacity: 0}, show:{opacity: 1}}} className=' col-span-1 h-[400px] rounded-[8px] bg-white
         border-l-[4px] p-4  
         px-[30px] cursor-pointer'>
            <div className='flex flex-wrap justify-between'>
            <div className='p-2'>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Statistique mensuel</h2>
            </div>
           
            <Ellipsis />
            </div>
            <div className='flex'>
                <BarChart
                    width={600}
                    height={350}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
           
        </motion.div>   
        <motion.div variants={{hidden: {opacity: 0}, show:{opacity: 1}}} className=' col-span-1 h-[400px] rounded-[8px] bg-white
         border-l-[4px] 
         px-[10px] cursor-pointer'>
            <div className='flex flex-wrap justify-between'>
            <div className='p-2'>
                <h2 className='text-[#B5B9DF] text-(11px] font-bold'>Statistique anuuel</h2>
            </div>
            <Ellipsis />
            </div>
            <div >
                <StatistAnneul />
            </div>
        </motion.div>  
     </motion.div>
     <Modal open={open} onClose={()=>setOpen(false)}>
      <div className='container  justify-center  w-[800px] h-[500px]'>
       <h1 className="text-xl font-bold underline underline-offset-8  text-center"> Detail de budget mensuel</h1> 
       <div className="p-3 py-2 text-start px-[150px]">
        <DetailDepense/>
       </div>
       <div className="p-3 py-2 text-start px-[150px]">
        <DetailRevenue/>
       </div>
      </div>
     </Modal>
    </div>
  )
}

export default PageDepense
