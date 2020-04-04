import React from 'react'

import './sidebar.scss'

export default props => {
  const { title } = props
  return (
    <div className='sidebar-container'>
      <h3>{title}</h3>
    </div>
  )
}
