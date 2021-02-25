import React from 'react'
import { Box, Badge, Text, Stack, Button, useColorMode } from '@chakra-ui/react'
// Box is similar to a div
const Card = ({tasks, deleteTask}) => {
    const { colorMode } = useColorMode(); // colorMode var tells which color mode we ar ein
    const bgColor = {light: 'gray.200', dark: 'gray.700'};
    // const textColor = {light: 'gray.500', dark: 'gray.100'};

    return (
        <div>
            <br/>
            <br/>

            {
                tasks.map((task) => (
                    <>
                        <Box w="400px" rounded='20px' overflow='hidden' boxShadow='sm'>
                            <Box p={5} bg={bgColor[colorMode]}>            
                                <Stack isInline align='baseline'>
                                    <Badge variant='outline' colorScheme={task.completed ? 'green' : 'red'} rounded='full' px={2}>
                                        {task.completed ? 'complete' : 'incomplete'}
                                    </Badge>
                                    <Text 
                                        textTransform='uppercase' 
                                        fontSize='sm' 
                                        color='gray.500'
                                        letterSpacing='wide'
                                    >
                                        {task.due ? 'Due ' : ''}
                                        {task.due}
                                    </Text>
                                </Stack>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>
                                    {task.title}
                                </Text>
                                <Text fontWeight='light' fontSize='md' noOfLines={3}> {/* isTruncated */}
                                    {task.description}
                                </Text>
                                    
                                <Box textAlign='center'>
                                    <Button onClick={() => deleteTask(task.id) } colorScheme='teal' size='sm' mt={3} boxShadow='sm' _hover={{boxShadow: 'md'}} _active={{boxShadow: 'lg'}}>
                                        Delete
                                    </Button>
                                </Box>
                                
                                
                            </Box>
                            
                        </Box> <br/>
                    
                    </>
                ))
            }
        </div>
    )
}

export default Card
