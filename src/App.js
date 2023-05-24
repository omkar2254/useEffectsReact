import React,{ useState, useEffect}from 'react'

function App() {

  const [resourceType, setResourceType] = useState('post')

  // useEffect(()=>{
  //   console.log('render');
  // })

  useEffect(()=>{
    console.log('render');
  },[resourceType])

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //      .then(response=>response.json())
  //      .then(json=>console.log(json))
  // },[resourceType])

  return (
    <>
    <div>
      <button onClick={()=>setResourceType}>Posts</button>
      <button onClick={()=>setResourceType}>Comments</button>
      <button onClick={()=>setResourceType}>Users</button>
    </div>
    <h1>{resourceType}</h1>
    </>
    
  );
}

export default App;
