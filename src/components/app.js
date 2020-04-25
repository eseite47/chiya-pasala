import React, {useState} from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'

const defaultReminders = [
  {
    name: 'call bubu'
  }, {
    name: 'hug bubu'
  }, {
    name: 'call peach'
  }
]

// Create main App component
const App = () => {
  const [reminders] = useState(defaultReminders);
  console.log({reminders})
  return (
    <Container>
      <Segment>
        <h1>Hello, Elisabeth!</h1>

        <p>Here are your reminders:</p>
        {
          reminders.map(reminder => {
          return (<p>{reminder.name}</p>)
          })
        }
        <Button>Add Reminder</Button>
      </Segment>
    </Container>
  )
};

// Export the App component
export default App