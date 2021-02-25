import React, {useState} from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
  Text,
  HStack

} from '@chakra-ui/react';

import Card from './components/Card';
import AddTask from './components/AddTask';
import DarkToggle from './components/DarkToggle';

function App() {
  const [tasks, setTasks] = useState(
    [ 
      {
        id: 1,
        title: 'Introduction to Chakra-UI',
        description: "Create a basic todo app to understand the basics of Chakra UI. Integrate features such as an input form, modal and dark mode. ",
        due: "23/04/2020", // replace with date later
        completed: true,
      },
      {
        id: 2,
        title: 'First Task',
        description: "This is a description of your first card",
        due: "24/04/2020",
        completed: true,
      },
      {
        id: 3,
        title: 'Add another card',
        description: "Click add task to add another card",
        due: "12/05/2021",
        completed: false,
      },

    ]
  );

  // Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 
    10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) // append new task to current task
  }

  // Delete Task
  const deleteTask = (id) => {
    // filter takes in a function
    setTasks(
      tasks.filter( (task) => task.id !== id) 
    ) 
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex align="center" justify="center"  direction="column" mt={10}> {/* height="100vh" */}
      <Text as='h1' fontWeight='semibold' fontSize='34px'>Get Things Done </Text>
        <HStack spacing="24px">
          <AddTask addTask={addTask} /> 
          <DarkToggle />
        </HStack>
        <Card tasks={tasks} deleteTask={deleteTask}/>
      </Flex>
    </ChakraProvider>
  );
}
// colorMode, toggleColorMode
export default App;
