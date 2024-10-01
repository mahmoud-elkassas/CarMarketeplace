import Header from "@/components/Header";
import React, { useState } from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import featuresData from "./../Shared/features.json";
import { Button } from "@/components/ui/button";
import { db } from "./../../configs";
import { CarListing } from "./../../configs/schema";
import IconFiled from "./components/IconFiled";
import UploadImages from "./components/UploadImages";
import { RiLoader4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";


function AddListing() {
  // State to hold form data
  const [formData, setFormData] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [triggerUploadImage, setTriggerUploadImage] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const user = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name) => {
    setSelectedFeatures((prevFeatures) =>
      prevFeatures.includes(name)
        ? prevFeatures.filter((feature) => feature !== name)
        : [...prevFeatures, name]
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const listingData = {
        ...formData,
        features: selectedFeatures,
        postedOn: moment().format("DD.MM.YYYY"),
      };

      // Insert the data into the database
      const result = await db
        .insert(CarListing)
        .values(listingData)
        .returning({ id: CarListing.id });

      if (result) {
        console.log("Data Saved");
        setTriggerUploadImage(result[0]?.id); // Set the ID for uploading images
      }
    } catch (error) {
      console.error("Error:", error);
      
    } finally {
      setLoader(false);
      navigate("/profile");
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10" onSubmit={onSubmit}>
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex items-center gap-2 mb-2">
                    <IconFiled icon={item?.icon} />
                    {item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>

                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Features List */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {featuresData.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(item.name)}
                    onChange={() => handleFeatureChange(item.name)}
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Upload Images */}
          <UploadImages triggerUpLoadImage={triggerUploadImage} />

          {/* Submit Button */}
          <div className="mt-10 flex justify-end">
            <Button
              className="bg-primary hover:bg-purple-700"
              type="submit"
              disabled={loader}
            >
              {!loader ? (
                "Submit"
              ) : (
                <RiLoader4Fill className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
