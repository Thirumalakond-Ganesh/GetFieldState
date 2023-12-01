import React from "react";
import { useForm } from "react-hook-form";
import './App.css';
export default function App (){
  const{register,getFieldState,formState:{isDirty,IsValid},}=useForm({
    mode:"onChange",
    defaultValues:{firstname:"",},
  })

  const filedState=getFieldState('firstname')

  return(
    <form>
      <h2>GetFieldState Example</h2>
      <input {...register("firstname",{required:true})} placeholder="Type Something..."/>
      <p>{getFieldState("firstname").isDirty&&"dirty"}</p>
      <p>{getFieldState("firstname").isTouched&&"touched"}</p>
      <button type="button" onClick={()=>console.log(getFieldState("firstname"))}>Field State</button>
    </form>
  )
}