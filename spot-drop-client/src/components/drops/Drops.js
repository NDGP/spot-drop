import React, { useEffect, useState }from "react";
import api from "../../api/db";


const Drops = () => {
    useEffect(() => {
//       fetchDrops()
       
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
    <div className='drop-container'>
      <div className='drop'>
        <div className='drop__header'>
        <div className='user-info'>
          <img className='user-info__img' src={'https://kidscreen.com/wp/wp-content/uploads/2019/10/barney.jpg'} alt='avitar-bubble'/>
          <h2 className='user-info__user-name'>username</h2>
        </div>
          <span className="material-icons-outlined">question_answer</span>        
        </div>
        <div className='drop__img__container'>
            <img className='drop__img' src={'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1'} alt='drop-img'/>
        </div>
        <div>
          <h2 style={{marginLeft: '5px', marginTop: '5px'}}className='user-info__user-name'>username</h2>
          <p className='drop__description'>description section </p> 

        </div>
      </div>
  </div>
    )
};

export default Drops;

