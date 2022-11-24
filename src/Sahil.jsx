import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

const Sahil = () => {
    let[inputset,inputupdate] = useState("");
    const[setdata,updateddata]=  useState([]);
    const serch = (e)=>{
        const value = e.target.value;
        inputupdate(value);
    }

const apidata = async()=>{
    try{
        const res = await axios.get('https://dummyjson.com/products')
        const result = await res.data;
        const maindata = await result.products
     updateddata(maindata)
        
    }catch (err){
console.log(err)
    }
}




const newdata=  setdata.filter((valuecurent)=>{   
        return valuecurent.title.toLowerCase().startsWith(inputset);
    })
    

 
useEffect(()=>{
apidata()
},[])


  return (

    <>
    <input type="text" value={inputset} onChange={serch} />
    
    <div className="main">
                {
                    newdata.map((value,index) => {
                        return (<>
                        
                            <div className="product" key={index}>
                                <img src={value.thumbnail} alt="" />
                                <h3>{value.brand} <span>{value.category}</span></h3>
                                <h4>{value.title}</h4>
                                <div className="price">
                                    <p>Main Rs. {value.price}</p>
                                    <p>Discount Rs. {value.discountPercentage}</p>
                                </div>
                                <p>{value.description}</p>
                                <p>Customer Rating {value.rating}</p>
                            </div>
                        </>)
                    })
                }

            </div>
    </>
  )
}

export default Sahil