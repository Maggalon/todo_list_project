import MainPage from "./pages/MainPage"
import Details from "./pages/Details"
import { useState } from 'react'

const App = () => {

  const tasks = [
    {
      id: 1,
      name: 'Тестовая задача №1',
      created: 'только что',
      priority: 'normal',
      marks: ['design', 'development'],
      descriprion: ''
    },
    {
      id: 2,
      name: 'Тестовая задача №2',
      created: '5 минут назад',
      priority: 'high',
      marks: ['design'],
      descriprion: ''
    },
    {
      id: 3,
      name: 'Тестовая задача №3',
      created: '9 часов назад',
      priority: 'high',
      marks: ['research'],
      descriprion: ''
    },
    {
      id: 4,
      name: 'Тестовая задача №4',
      created: '20 октября 2020, 16:25',
      priority: 'normal',
      marks: ['design', 'development', 'research'],
      descriprion: ''
    }
  ]

  const [page, setPage] = useState('main')
  const [taskID, setTaskID] = useState(0)

  if (page === 'main') {
    return (
      <MainPage tasks={tasks} showDetails={id => {
        setTaskID(id)
        setPage('show_details')
      }} />
    )
  }
  else {
    return (
      <Details task={tasks.filter(task => task.id === taskID)[0]} goBack={() => setPage('main')} />
    )
  }
}

export default App;
