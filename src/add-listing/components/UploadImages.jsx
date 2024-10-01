import React, { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./../../../configs/firebaseConfig"; // Ensure this path is correct
import { db } from "./../../../configs"; // Ensure this path is correct
import { CarImages } from "./../../../configs/schema"; // Ensure this path is correct

const UploadImages = ({ triggerUploadImage }) => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    if (triggerUploadImage) {
      UploadImageToServer();
    }
  }, [triggerUploadImage]);

  const onFileSelected = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFileList((prevFiles) => [...prevFiles, ...files]);
  };

  const UploadImageToServer = async () => {
    if (selectedFileList.length === 0) {
      console.warn("No files selected for upload.");
      return;
    }

    const uploadPromises = selectedFileList.map(async (file) => {
      const extension = file.name.split(".").pop();
      const fileName = `${Date.now()}.${extension}`;
      const storageRef = ref(storage, `car-app/${fileName}`);
      const metaData = { contentType: file.type };

      try {
        console.log(`Uploading ${file.name}...`);
        await uploadBytes(storageRef, file, metaData);
        const downloadUrl = await getDownloadURL(storageRef);
        console.log("Image download URL:", downloadUrl);

        // Save the download URL in the database
        await db.insert(CarImages).values({
          imageUrl: downloadUrl,
          carListingId: triggerUploadImage,
        });
        console.log("Image URL stored in the database");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });

    await Promise.all(uploadPromises);
    console.log("All images uploaded successfully!");
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {selectedFileList.map((file) => (
          <div key={file.name} className="p-5 shadow-md bg-white rounded-xl relative">
            <IoCloseCircleSharp
              className="absolute m-2 text-white cursor-pointer text-3xl hover:text-red-500"
              onClick={() => {
                setSelectedFileList((prevFiles) =>
                  prevFiles.filter((f) => f.name !== file.name)
                );
              }}
            />
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-[130px] object-cover"
            />
            <div className="mt-2 text-sm text-gray-600 overflow-x-hidden">
              {file.name}
            </div>
          </div>
        ))}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          onChange={onFileSelected}
          id="upload-images"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default UploadImages;
