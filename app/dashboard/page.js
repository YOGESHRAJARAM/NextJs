"use client"
import { useRouter } from "next/navigation"

const page = () => {
    const router = useRouter();
    const back = () =>{
        router.push("/")
    }
  return (
    <>
      <div>Dashboard</div>
      <button onClick={()=>window.print()}>back</button>
    </>
  
  )
}

export default page