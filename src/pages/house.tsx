import PropertyReservationCard from "@/components/PropertyReservationCard"
import { properties } from "@/data/mockdata"
import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
} from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const House: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <HStack>
            <Text fontSize="16px" fontWeight="700" fontFamily="Noto Sans" lineHeight="1.5">
              予約内容の入力
            </Text>
          </HStack>

          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
        {properties.map((property) => (
          <SwiperSlide>
            <PropertyReservationCard property={property} onOpen={onOpen} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default House
