import { useEffect, useState } from 'react'
import axios from 'axios'
import Destination from './Destination'
import Card from './Card'
function App() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState({
        dest:'',
        subDest:'',
    })

    const[res,setRes]=useState(null)

    useEffect(()=>{
        fetchData()
    },[data.subDest])


    const fetchData=async ()=>{
        try {
            await axios.get(`http://localhost:3000/api/user/search?destination=${data.dest}&subDestination=${data.subDest}`)
                        .then(res=>setRes(res.data[0]))
                        .catch(err=>console.log(err))
        } catch (error) {
            console.log(error.message)
        }
    }



    const handleChange=(e)=>{
        setData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))

        
    }

    const handleNext=()=>{
        setCount(prev=>prev+1)
    }
    const handlePrev=()=>{
        setCount(prev=>prev-1)
    }

  return (
    <main className='max-h-[100dvh] min-w-[100vw] border flex-col'>
        <header>
            <nav className='flex w-full min-h-[5rem] bg-[var(--primary-color)] items-center justify-end '>
                <p className='font-semibold mr-5 hover:text-[#242424] cursor-pointer'>Admin</p>
            </nav>
            </header>
        <section className='min-h-[calc(100dvh-6rem)] min-w-[10rem] border-black flex justify-center items-center'>
            <div className='bg-white p-4 min-w-[670px]'>
                {count===0&&<Destination handleChange={handleChange} data={data}/>}
                {count===1&&<Card data={res}/>}
                <div className='form-control flex w-full mt-6  justify-end'>
                    <button className='text-white m-3 bg-[var(--secondary-color)] px-6  rounded-lpx-6 py-1.5 rounded-lg' onClick={handlePrev}>Prev</button>
                    <button className='text-white m-3 bg-[var(--secondary-color)] px-6 py-1.5 rounded-lg' onClick={handleNext}>Next</button>
                </div>
                {count>1&& alert('success')}
            </div>
        </section> 
    </main>
  )
}

export default App
