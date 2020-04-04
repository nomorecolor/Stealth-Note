import React from 'react'
import { useParams } from 'react-router'

import { Conversation } from '../components/conversation/conversation'

export default ConversationDetailsPage => {
  const { id } = useParams()

  return (
    <div className='main-container'>
      <Conversation id={id} />
    </div>
  )
}
