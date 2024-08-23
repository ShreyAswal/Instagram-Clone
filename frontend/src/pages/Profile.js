import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileBio from '../components/Profile/ProfileBio'
import ProfilePosts from '../components/Profile/ProfilePost'

const Profile = () => {
  return (
    <div className='max-w-4xl w-full lg:w-[70%] h-auto mx-auto mt-9 mb-9 pt-9'>
      <ProfileHeader/>
      <ProfileBio/>
      <ProfilePosts/>
    </div>
  )
}

export default Profile
