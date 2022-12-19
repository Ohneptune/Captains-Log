import React from 'react'

const New = () => {
  return (
    <>
        <form action="/logs" method="POST">
            title:<input type="text" name="title"  placeholder='enter title'/>
            entry:<input type="text" name="entry" placeholder='enter entry'/>
            shipISBroken:<input type="checkbox" name="shipIsBroken" />
            <input type="submit"/>
        </form>
    </>
  )
}

export default New