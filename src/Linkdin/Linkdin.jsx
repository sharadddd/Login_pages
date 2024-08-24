import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function
    Linkdin() {

    const data = useLoaderData()
    /*const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sharadddd')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })


    }, [])*/
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github id:{data.id}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Linkdin

export const Linkdininfo = async () => {
    const respone = await fetch('https://api.github.com/users/sharadddd')
    return respone.json()
}