import PropertyReservationCard from "@/components/PropertyReservationCard"
import { properties } from "@/data/mockdata"
import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const House: NextPage = () => {
  return (
    <>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
        {properties.map((property) => (
          <SwiperSlide>
            <PropertyReservationCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default House
