import React from 'react'

export default function SimpleComponent() {
  return (
    <div>
      {new Date().toISOString()}
    </div>
  )
}
