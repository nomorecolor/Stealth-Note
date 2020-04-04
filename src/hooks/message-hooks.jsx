import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import firebase from '../firebase-config/firebase-config'
import 'firebase/firestore'

const db = firebase.firestore();

export const useFetchMessage = (id) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            firebase
                .firestore()
                .collection(`conversations/${id}/messages`)
                .orderBy("sent", "desc")
                .onSnapshot(doc => {
                    const messages = []
                    doc.forEach(msg => {
                        messages.push({ ...msg.data(), id: msg.id })
                    })

                    setData(messages)
                    setLoading(false)
                })
        }

        return fetchData()
    }, [])

    return { data, loading }
}

useFetchMessage.propType = {
    id: PropTypes.any.isRequired
}

export const createMessage = (conveId, message) => {
    message.sent = firebase.firestore.FieldValue.serverTimestamp()

    db.collection('conversations')
        .doc(conveId)
        .collection('messages')
        .add(message)
    // .then(x => { x.update({ id: x.id }) });
};

