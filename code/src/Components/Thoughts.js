import React, { useState, useEffect } from 'react'

import './thoughts.css'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
    .then(res => res.json())
    .then(json => setThoughts(json))
  },[])

  return (
    <div>
      <article>
        {thoughts.map(thought => (
          <p className='thoughts-card' key={thought._id}>{thought.message}</p>
        ))}
        
      </article>
    </div>
  )
}