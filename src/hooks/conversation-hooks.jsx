import { useState, useEffect } from 'react'
import firebase from '../firebase-config/firebase-config'
import 'firebase/firestore'

export const useFetchConversation = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase
      .firestore()
      .collection('conversations')
      .onSnapshot(doc => {
        const result = []
        doc.forEach(data => {
          result.push({ ...data.data(), id: data.id })
        })

        setData(result)
        setLoading(false)
      })
  }, [])

  return { data, loading }
}
