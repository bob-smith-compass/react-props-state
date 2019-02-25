import React from 'react'

export default function Form() {
    let values = 124
    let handleSubmit = function() {
        console.log(`Submitting ${123}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={'Initial Value'}/>
        <textarea name="" id="" cols="30" rows="10" defaultValue={"Default value"}>
        </textarea>
      </form>
    </div>
  )
}
