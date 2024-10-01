import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import { useUser } from '@clerk/clerk-react';


const MyListing = () => {
    const {user}=useUser();
    React.useEffect(() => {
       user&&GetUserCarListing();
    }, [ user]);
    const GetUserCarListing =async()=>{
        // Fetch user car listing from API
        //...
        const result = await db.select().from(CarListing).leftJoin(CarImages,eq(CarListing.id,CarImages.id))
        .where(eq(CarListing.user_id, user.id))
        .orderBy(desc(CarListing.id))
        console.log(result);
    }


  return (
    <div className='mt-6'>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My Listing</h2>
          <Link to={"/add-listing"}>
            <Button className="bg-blue-600 text-white hover:bg-blue-800">
              + Add New Listing
            </Button>
          </Link>
        </div>
    </div>
  )
}

export default MyListing