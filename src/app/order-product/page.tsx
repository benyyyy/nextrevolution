"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter()
    const handleClick=()=>{
        console.log("placing your order")
         router.push("/")
  
       
    }
    return(
        <>
        <h1>Order product</h1>
        <button className="bg-green-200" onClick={handleClick}>place order</button>
        </>
    )
}