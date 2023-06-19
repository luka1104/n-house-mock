import PropertyReservationCard from "@/components/PropertyReservationCard"
import { properties } from "@/data/mockdata"
import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  HStack,
  Image,
  Avatar,
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
          <HStack position="relative" mt="20px" justifyContent="center" alignItems="center">
            <Image position="absolute" left="0" ml="27px" w="10px" src="/icons/Back.png" onClick={onClose} />
            <Text fontSize="16px" fontWeight="700" fontFamily="Noto Sans" lineHeight="1.5">
              予約内容の入力
            </Text>
          </HStack>
          <HStack mt="20px" ml="24px" gap="16px">
            <Avatar w="60px" h="60px" src={properties[0].image} />
            <Box>
              <Text fontSize="12px" fontWeight="700" fontFamily="Noto Sans" lineHeight="1.5">
                N’HOUSE
              </Text>
              <Text fontSize="16px" fontWeight="700" fontFamily="Noto Sans" lineHeight="1.5">
                {properties[0].title}
              </Text>
            </Box>
          </HStack>

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
