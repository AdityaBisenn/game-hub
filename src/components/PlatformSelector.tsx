import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import UsePlatforms, { Platform } from "../hooks/usePlatforms"

interface Props {
    selectedPlatform: Platform | null;
    setSelectedPlatform: (platform:Platform | null) => void;
}

const PlatformSelector = ({selectedPlatform,setSelectedPlatform}:Props) => {

    const {platforms, error, loading} = UsePlatforms()

    if (error) {
        return null;
    }
    
  return (
    <Box padding={5}>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} >
            {selectedPlatform ? selectedPlatform.name : 'Platform'}
        </MenuButton>
        <MenuList>
            {platforms.map((platform) =>{
                return <MenuItem onClick={()=>setSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
            })}
        </MenuList>
    </Menu>

    </Box>
  )
}
export default PlatformSelector