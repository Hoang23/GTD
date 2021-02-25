import React from 'react'
import {
    useColorMode,
    Button
  } from '@chakra-ui/react';

const DarkToggle = () => {
    const { toggleColorMode } = useColorMode(); // colorMode var tells which color mode we ar ein

    return (
        <div>
            <Button size="md" onClick={toggleColorMode} colorScheme="green" variant="outline">
                ToggleDark
            </Button>
        </div>
    )
}

export default DarkToggle
