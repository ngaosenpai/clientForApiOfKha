import React, { useContext, useEffect, useState } from 'react';
import { auth, AuthContext } from "../../auth"

import Question from "../../component/question/Question"

function ListQuestions(props) {

    const authContext = useContext(AuthContext)
    const authAxios = authContext.authAxios

    const [list, setList] = useState([1])
    const [isChange, setIsChange] = useState(false)

    const handleChange = () => {
        setIsChange(pre => !pre)
    }

    const deleteItem = (id) => {
        // authAxios.delete(`/all-questions/${id}`)
        // .then(res => handleChange())
        // .catch(err => console.log(err))
    }

    const updateItem = (id, content, cb) => {
        // authAxios.put(`/all-questions/${id}`, {content : content})
        // .then(res => handleChange(), cb())
        // .catch(err => console.log(err))
    }

    useEffect(() => {
        const authAxios = authContext.authAxios
        //dung auth axios de req
        // authAxios
        // .get("/all-questions")
        // .then(res => setList(res.data))
        // .catch(err => console.log(err))

    }, [isChange])

    return (
        <div>
            {
                list.map((item) => (
                    <Question 
                        key = {item.id} 
                        data = {item} 
                        delete = {deleteItem} 
                        update = {updateItem}
                    />
                ))
            }
        </div>
    );
}

export default ListQuestions;