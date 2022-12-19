import React from 'react'

const Index = ({logs}) => {
  return (
    <>
     <section>
     <a href='/logs/new'>New Logs</a>
       {logs.map((log,index)=>{
          return (
            <div key={index}>
                <p>title:<a href={`/logs/${log._id}`}> {log.title} </a></p>
                <p>Entry: {log.entry}</p>
                <p>Info: {log.shipIsBroken ? 'The ship is broken' : 'The ship is in good condition'}</p>
                <a href={`/logs/${log._id}/edit`}>Edit</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" defaultValue="delete" />
                </form>
            </div>
          ) 
       } )}
     </section>
    </>
  )
}

export default Index