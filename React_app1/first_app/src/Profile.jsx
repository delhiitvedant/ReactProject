import React from 'react'

const Profile = (props) => {
  return (
    <div>
     Your Name is: {props.userData.id}
      Your Designation is:{props.info.designation}
      Your Location is:{props.info.location}
    </div>
  )
}

export default Profile
