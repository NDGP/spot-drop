import React, { useEffect, useState, Fragment }from "react";
import { Accordion } from "react-bootstrap";
import api from "../../api/db";


const Drops = () => {
    useEffect(() => {
      fetchDrops()
       
    },[])

const [comments, setComments] = useState('none')
const [containerShift, setContainerShift] = useState('25vw')
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
const handelCommentsClick = () => {
  containerShift === '25vw' ? setContainerShift('15vw') : setContainerShift('25vw')
  comments === 'none' ? setComments('block') : setComments('none')
}

  return(
    <div className='body'>
        <div style={{marginLeft:`${containerShift}`}} className='drop-body'>
          <div className='drop-info'>
            <div className='avitar-user-container'>
              <div className='info-container'>
                <img 
                className='avatar'
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
                />
                <ul className='name-info-list'>
                  <li>@userName</li>
                  <li style={{fontWeight: 'lighter'}}>title</li>
                </ul>
              </div>
                <span style={{flex: 'start', cursor:'pointer'}} onClick={handelCommentsClick} class="material-icons-outlined">chat</span>            
              </div>
          </div>
            <div class="drop-container">
            </div>
        </div>
        <div style={{display: `${comments}`}} className='comment-container'>
        <div className='form-group'>
        <label className='comment-label' htmlFor='comment'>comment</label>
            <input
              className='comment-input'
              id='comment'
              type='comment'
              name='comment'
              />
            <ul className='comment-list'>
              <li>
              <img 
                className='avatar'
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
                />
                <p>
                  oifjewwoiajfwwa
                </p>
                
              </li>
            </ul>
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

