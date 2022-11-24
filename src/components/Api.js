import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Api = () => {
    const [api, setApi] = useState([])
    console.log(api)
    useEffect(() => {
        axios.get('https://admin.topazstone.ca/Blogs')
            .then(res => {
                // console.log("himanshu", res.data[0].tittle)
                setApi(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
         
            <ul>
              {
                api.map((value)=>{
                    const {tittle,content} = value 
                    return(<>
                    <h1>{tittle}</h1>
                    <p>{content}</p>
                    </>)
                })
              }
            </ul>

        </>
    )
}

export default Api