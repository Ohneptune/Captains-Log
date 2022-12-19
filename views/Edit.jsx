import React from 'react'

const Edit = ({log}) => {
  return (
     <>
        <form action={`/logs/${log.id}?_method=PUT`} method="POST">
            title:<input type="text" name="title" defaultValue={log.title}/>
            entry:<input type="text" name="entry" defaultValue={log.entry}/>
            shipISBroken: {log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked/>: <input type="checkbox" name="shipIsBroken" />} 
            <input type="submit"/>
        </form>
     </>
  )
}

export default Edit