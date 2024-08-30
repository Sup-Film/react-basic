import React from 'react'

function Image({ imageURL, width = 100 }) {
  return (
    <>
      <img src={imageURL} alt="" width={width} />
    </>
  )
}

export default Image
