import React from 'react'

function Checkbox({ text, isChecked }) {
  return (
    <>
      <div>{text} {isChecked ? 'is done' : 'is in progress'}</div>
    </>
  )
}

export default Checkbox
