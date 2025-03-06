import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Globe, Phone, Mail } from 'lucide-react'

const TodoCard = ({ todo }) => {
  return (
    <motion.div
      className='max-w-sm p-6 bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg rounded-2xl text-white border border-white/20 transform hover:scale-105 transition-all duration-300'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Todo Title */}
      <h2 className='text-xl font-bold'>{todo.title}</h2>

      {/* Status */}
      <div className='flex items-center gap-2 mt-2'>
        {todo.completed ? (
          <CheckCircle className='text-green-300 w-5 h-5' />
        ) : (
          <XCircle className='text-red-300 w-5 h-5' />
        )}
        <span className='text-sm'>
          {todo.completed ? 'Completed' : 'Not Completed'}
        </span>
      </div>

      {/* User Info */}
      <div className='mt-4 p-4 bg-amber-700 rounded-lg backdrop-blur-md'>
        <h3 className='text-lg font-semibold'>{todo.user?.name}</h3>
        <p className='text-sm text-white/80'>@{todo.user?.username}</p>

        <div className='mt-2 space-y-2 text-white/90'>
          <p className='flex items-center gap-2'>
            <Mail className='w-4 h-4 text-yellow-300' />
            {todo.user?.email}
          </p>
          <p className='flex items-center gap-2'>
            <Phone className='w-4 h-4 text-green-300' />
            {todo.user?.phone}
          </p>
          <p className='flex items-center gap-2'>
            <Globe className='w-4 h-4 text-pink-300' />
            {todo.user?.website}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TodoCard
