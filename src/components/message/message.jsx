import React, { createRef, useContext, useState, useEffect } from 'react'

import './message.scss'

import { UserContext } from '../../mock-db/mock-db'

import { createMessage } from '../../hooks/message-hooks'
import { useFetchMessage } from '../../hooks/message-hooks'

export const Message = props => {
  const { uid, message } = props
  const { curId } = useContext(UserContext)

  const style = uid === curId ? 'message right' : 'message left'

  return (
    <div className={style}>
      <p id='message'>{message}</p>
    </div>
  )
}

export const MessageList = ({ id }) => {
  const { data, loading } = useFetchMessage(id)

  return (<div id='message-list'>
    {loading ? <p>loading messages..</p> : data.map(msg => {

      return (<Message key={msg.id} uid={msg.uid} message={msg.message} />)
    })}
  </div>)
}

export const EntryMessage = props => {
  const { conveId } = props
  const { curId } = useContext(UserContext)

  const textArea = createRef()

  const [defaultHeight, setDefaultHeight] = useState(0)

  useEffect(() => {
    setDefaultHeight(textArea.current.scrollHeight)
  }, [defaultHeight])

  const handleKeyDown = (e) => {
    adjustHeight()

    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        const msg = {
          message: textArea.current.value,
          uid: curId
        }

        submitMessage(msg)

        textArea.current.value = ''
        resetHeight(defaultHeight)

        e.preventDefault()
      }
    }
  }

  const handleKeyUp = () => {
    adjustHeight()
  }

  const adjustHeight = () => {
    const curHeight = textArea.current.clientHeight
    const height = textArea.current.scrollHeight

    if (curHeight < height)
      resetHeight(height)
  }

  const resetHeight = (height) => {
    textArea.current.style.height = `${height}px`
  }

  const submitMessage = (msg) => {
    createMessage(conveId, msg)
  }

  return <div className='entry-message-container'>
    <textarea ref={textArea} placeholder='Enter message here.' onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} /></div>
}
