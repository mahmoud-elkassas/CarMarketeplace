import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const DropdownField = ({item ,handleInputChange}) => {
  return (
    <div>
        <Select onValueChange={(value)=>handleInputChange(item.name , value)}
        required ={item.required}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder={item.label} />
  </SelectTrigger>
  <SelectContent>
    
    {item?.options.map((options ,index)=>(
        <SelectItem key={index} value={options}>{options}</SelectItem>
    ))}
    
  </SelectContent>
</Select>

    </div>
  )
}

export default DropdownField