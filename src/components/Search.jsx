import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"

import { CiSearch } from "react-icons/ci";
import Data from "./../Shared/Data";


const Search = () => {
  return (
    <div className="font-medium p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      <Select>
        <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="New">New</SelectItem>
    <SelectItem value="old">old</SelectItem>
         
        </SelectContent>
      </Select>
      <Select>
      <Separator orientation="vertical" className="hidden md:block"  />

  <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="CarMakes" />
  </SelectTrigger>
  <SelectContent>
  {Data.CarMakes.map((maker , index) =>(
                <SelectItem key={index} value={maker.name}>
                  {maker.name}
                </SelectItem>
            ))}
  </SelectContent>
</Select>
<Select>
<Separator  orientation="vertical"  className="hidden md:block" />

  <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
  {Data.Pricing.map((price , index) =>(
                <SelectItem key={index} value={price.amount}>
                  {price.amount}
                </SelectItem>
            ))}
  </SelectContent>
</Select>
<div>
<CiSearch  className="text-[50px] bg-purple-400 text-white rounded-full p-3 hover:scale-105 transition-all cursor-pointer"/>
</div>

    </div>
  );
};

export default Search;
