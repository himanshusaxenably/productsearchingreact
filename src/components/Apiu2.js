import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apiu2 = () => {
    const [data,Setdatas]=useState([])
    useEffect(()=>{
        axios.get('https://api.instantwebtools.net/v1/airlines')
        .then(find=>{
            console.log("Hello",find.data)
            Setdatas(find.data)
        })
    },[])
  return (
 <h1>{}</h1>
  )
}

export default Apiu2