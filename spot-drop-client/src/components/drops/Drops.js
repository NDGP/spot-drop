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
              'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlODJhYjM2MDdkYjRhNjNlNjRmNWY4In0sImlhdCI6MTY0MjYwNTIzNSwiZXhwIjoxNjQyOTY1MjM1fQ.60GIVpFUEPu2OqRP77Bx5HcJDCs8JTvg2Mr4RlKbp6Q'
          }
      })
      console.log(res.data)
      return setDrops(...drops, res.data)
  } catch (err) {
      return console.log(err.message)
  }
}

  return(
    <Fragment>
      {drops.map(drop => {
        return (
        <div key={drop._id} >
          {drop.file}
        <h4> located at {drop.location.coordinates[0]} and {drop.location.coordinates[1]}</h4>
        </div>
        
        )
      })}
    </Fragment>
    
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
    )
};

export default Drops;

