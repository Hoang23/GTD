import React, {useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Textarea,
    Checkbox,
  } from "@chakra-ui/react"

const AddTask = ( {addTask}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [due, setDue] = useState('')
    const [completed, setCompleted] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault() // so that it doesnt commit to page

        if(!title) {
            alert('Please add a task')
            return
        }

        addTask({ title, description, due, completed })
        
        // reset form back
        setTitle('')
        setDescription('')
        setDue('')
        setCompleted(false)
    }

  return (
    <>

      <Button colorScheme = "green"  onClick={onOpen}>Add Task</Button>
    
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={onSubmit}>
                <FormControl>
                    <FormLabel>Task</FormLabel>
                    <Input 
                        ref={initialRef} 
                        placeholder="Task (required)"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        // value={value}
                        // onChange={handleInputChange}
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Comments/Description/Notes"
                        size="md"
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Due</FormLabel>
                    <Input 
                        value={due} 
                        onChange={(e) => setDue(e.target.value)}
                        placeholder="01/01/2021"
                        size="md"
                    />
                </FormControl>

                <FormControl mt={4}>
                    <Checkbox 
                        colorScheme="green" 
                        value={completed}
                        onChange={(e) => setCompleted(e.target.value)}
                    >
                        Completed?
                    </Checkbox>
                </FormControl>
            
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onSubmit}  colorScheme="blue" mr={3}>
              Add Task
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
    
}

export default AddTask