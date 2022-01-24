import React, { useEffect, useState, Fragment }from "react";
import api from "../../api/db";


const Drops = () => {
    useEffect(() => {
      fetchDrops()
       
    },[])

const [drops, setDrops] = useState([])

const fetchDrops = async () => {
  try {
      const res = await api.get('/api/drops', {
          headers: {
              'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlODJhYjM2MDdkYjRhNjNlNjRmNWY4In0sImlhdCI6MTY0MjcwMDA5MywiZXhwIjoxNjQzMDYwMDkzfQ.TO6Urd3w0uk7dVKwH6VwEk1IOmxAb673kN3NcodT-5M'
          }
      })
      console.log(res.data)
      return setDrops(...drops, res.data)
  } catch (err) {
      return console.log(err.message)
  }
}

  return(
    
        <div className='drop-body'>
          <div class="drop-container">
         
          </div>
          <div className='drop-info'>
            <div className='avitar-user-container'>
              <img 
              className='avatar'
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
              />
              <h2>userName</h2>
            </div>
          </div>
        </div>
        )    
  //   <div style={{margin: 20}} className="column">
  //   <div className="col s12 m6">
  //     <div className="card blue-grey darken-1">
  //       <div className="card-content white-text">
  //         <span className="card-title">Bills Drop</span>
  //         <p>drop count = {drops.length}</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>  
    
};

export default Drops;

