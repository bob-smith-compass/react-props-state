import React from 'react'

export default function AddAuther({match}) {
  return (
    <div>
      <h1>Add Something</h1>
      <p>{JSON.stringify(match)}</p>
    </div>
  )
}
