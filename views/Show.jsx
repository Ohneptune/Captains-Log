import React from 'react'

const Show = ({log}) => {
  return (
    <>
    <div>
      <h1>title {log.title}</h1>
      <h1>Entry {log.entry}</h1>
      <h1>{log.shipIsBroken ? ' The ship is broken' : 'Ship is still good'}</h1>
      <a href='/logs'>Back</a>
      </div>
    </>
  )
}

export default Show