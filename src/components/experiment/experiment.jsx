import React, { useEffect, useState } from 'react'

import firebase from '../../firebase-config/firebase-config'
import 'firebase/firestore'

export const Experiment = () => {
    const [msg, setMsg] = useState([])

    useEffect(() => {
        // const fetchData = async () => {
        //     const db = firebase.firestore()
        //     const data = await db.collection("conversations/0wVnsGJA2A9rYKov0yEp/messages")

        //     const result = []
        //     data.docs.map(doc => {
        //         result.push({ ...doc.data(), id: doc.id })
        //     })

        //     console.log(result)
        //     setMsg(result)
        // }

        // fetchData()

        const db = firebase.firestore()
        const unsubscribe = db.collection("conversations/0wVnsGJA2A9rYKov0yEp/messages")
            .onSnapshot(snapshot => {
                const result = []
                snapshot.forEach(doc => {
                    result.push({ ...doc.data(), id: doc.id })
                })

                setMsg(result)
            })

        return unsubscribe
    }, [])

    return (
        <ul>
            {msg.map(m => <Experiment2 key={m.id} id={m.id} message={m.message} />)}
        </ul>
    )
}

const Experiment2 = (props) => {
    const { id, message } = props

    return (
        <li key={id}>{message}</li>
    )
}