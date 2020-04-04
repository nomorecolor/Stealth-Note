import React, { useContext } from 'react'

import './conversation.scss'

import { Link } from 'react-router-dom'

import { MessageList, EntryMessage } from '../message/message'

import { useFetchConversation } from '../../hooks/conversation-hooks'

import { UserContext } from '../../mock-db/mock-db'

export const Conversation = props => {
  const { id } = props

  return (
    <div id='conversation'>
      <MessageList id={id} />
      <EntryMessage conveId={id} />
    </div>
  )
}

export const ConversationList = () => {
  const { data, loading } = useFetchConversation()
  const { curId } = useContext(UserContext)

  return (
    <div id='conversation-list'>
      {loading ? (
        <p>Loading list...</p>
      ) : (
          data.sort(sortConversation).filter(x => x.participants.includes(curId)).map(({ id, name, participants }) => {
            const conversationName = name || participants.join()

            return <ConversationCard key={id} id={id} name={conversationName} />
          })
        )}
    </div>
  )
}

const sortConversation = (a, b) => {
  return a.createdAt.seconds - b.createdAt.seconds
}

export const ConversationCard = props => {
  return (
    <Link className='link' to={`/c/${props.id}`}>
      <div className='conversation-card'>
        <p>{props.name}</p>
      </div>
    </Link>
  )
}
