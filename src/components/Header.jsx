import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <div className="flex items-center gap-1 font-bold">
        <img
          className="rounded-full"
          src="./03e46bee-8924-4cf2-a26b-687083131f7f.webp"
          width={50}
          height={50}
          alt="Clerk logo"
        />
        <h2>CarMarketplace</h2>
      </div>
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-pretty">Home</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-pretty">Search</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-pretty">New</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-pretty">Preowned</li>
      </ul>

      <div className="flex items-center gap-5">
        {isSignedIn ? (
          <>
            <UserButton />
            <Link to={"/profile"}>
              <Button className="bg-blue-600 text-white hover:bg-blue-800">Submit Listing</Button>
            </Link>
          </>
        ) : (
          <SignInButton  mode="modal" forceRedirectUrl="/">
            <Button className="bg-blue-600 text-white hover:bg-blue-800">Sign In</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Header;
