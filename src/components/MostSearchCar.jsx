import CatItem from "./CatItem";
import FakeData from "./../Shared/FakeData";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchCar = () => {
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Search Car
      </h2>
      <div>
        <Carousel>
          <CarouselContent>
            {FakeData.carList.map((car, index) => (
              <CarouselItem className="basis-1/4">
                <CatItem car={car} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MostSearchCar;
