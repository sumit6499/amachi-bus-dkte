
function Destination({handleChange,data}) {
    
  return (
    <>
        <h1 className='text-black font-semibold'>Bus Information</h1>
        <h3 className=' mb-4 text-sm text-gray-600'>Please Select Your Bus Details</h3>
        <label htmlFor="busFrom" className='text-[#242424] '>Bus From</label>
        <select name="from" id="from" className='block w-full rounded-md border-0 p-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 mt-2'>
            <option value="dkte">DKTE College</option>
        </select>
        <label htmlFor="busDest" className='text-[#242424] '>Bus Destination</label>
        <select name="dest" id="dest" className='block w-full rounded-md border-0 p-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 mt-2' onChange={handleChange}>
            <option >Select Option</option>
            <option value="kolhapur">Kolhapur</option>
            <option value="sangali">Sangali</option>
        </select>
        {data.dest==='kolhapur' &&(
            <>
                <label htmlFor="busSubDest" className='text-[#242424]'>Bus Sub-Destination</label>
                <select name="subDest" id="subdestkol" className='block bg-white w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-2' onChange={handleChange}>
                    <option >Select Option</option>
                    <option value="kawala naka">Kalwala Naka</option>
                    <option value="gangawesh">Ganga Wesh</option>
                </select>
            </>
         
        )}

        {data.dest==='sangali'&& (
            <>
                <label htmlFor="busSubDest" className='text-[#242424]'>Bus Sub-Destination</label>
                <select name="subDest" id="subdest" className='block bg-white w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-2' onChange={handleChange}>
                    <option >Select Option</option>
                    <option value="vishrambag">Vishrambag</option>
                    <option value="walchand clg">Walchand College</option>
                </select>
            </>
        )}
        
     
    </>
  )
}

export default Destination
