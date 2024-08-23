import React from 'react'

const ProfilePosts = () => {
  const posts=[
    {id:1,src:'https://via.placeholder.com/150',alt:'Post 1'},
    {id:2,src:'https://via.placeholder.com/150',alt:'Post 2'},
    {id:3,src:'https://via.placeholder.com/150',alt:'Post 3'},
  ];
  return (
    <div className='p-4 grid grid-cols-3 gap-1'>
      {posts.map((item) => (
        <img key={item.id} src={item.src} alt={item.alt} className='w-full'></img>
      ))}
      
    </div>
  )
}

export default ProfilePosts
