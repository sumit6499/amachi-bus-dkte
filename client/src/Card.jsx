
function Card({data}) {


    const Cards=({data})=>{

        return(

            <>
                <p className='text-black'>{data.month} Month</p>
                <p className='text-black'>{data.price}/-</p>
            </>
        )
               
    }
    
  return (
    <div className=''>
        <h1 className='text-black font-semibold'>Payment Information</h1>
        <h3 className='text-gray-600'>Please Select Payment Plan</h3>
        <ul className='mt-4'>
            {data.price?.map((data,index)=>
                 <li className='w-full border-black border p-3 rounded-md mb-3' key={index}>
                    <Cards data={data} />
                 </li>
            )}
        </ul>
    </div>
  )
}

export default Card

