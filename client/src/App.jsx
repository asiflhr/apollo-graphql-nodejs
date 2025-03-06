import './App.css'
import { gql, useQuery } from '@apollo/client'
import TodoCard from './components/TodoCard'

const GET_TODOS = gql`
  query GetTodosWithUser {
    getTodos {
      title
      completed
      user {
        name
        username
        email
        phone
        website
      }
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_TODOS)

  if (loading) return <h1 className='text-center text-gray-600'>Loading...</h1>
  if (error)
    return <h1 className='text-center text-red-500'>Error fetching data</h1>

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
        Todo List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.getTodos.map((todo, index) => (
          <TodoCard key={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
