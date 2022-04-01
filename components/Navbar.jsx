import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { FcHome, FcAbout } from 'react-icons/fc'
import { MdOutlineMenu } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

import logo from '../assets/images/logo.png'

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='blackAlpha.600'>
    <Flex cursor='pointer'>
      <Link href='/' passHref>
        <a>
          <Image src={logo} alt='logo' height='50' width='50' />
        </a>
      </Link>
      <Link href='/' passHref>
        <Text fontSize='3xl' color='red.500' fontWeight='bold'>
          Real Estate
        </Text>
      </Link>
    </Flex>
    <Spacer />
    <Flex alignItems='center'>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<MdOutlineMenu size='40' />}
          variant='outlined'
        />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
)

export default Navbar
