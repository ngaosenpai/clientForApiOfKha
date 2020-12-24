import React, { useState } from 'react';
import { auth } from '../../auth';

import "./Question.scss"

/*
    {
        "id": 1,
        "content": "Truong DHBK co bao nhieu co so: ",
        "type": "E",
        "answerList": [
            {
                "id": "A",
                "content": "2",
                "right": true
            },
            {
                "id": "B",
                "content": "3",
                "right": false
            },
            {
                "id": "C",
                "content": "4",
                "right": false
            },
            {
                "id": "D",
                "content": "5",
                "right": false
            }
        ],
        "lecturer": {
            "employee": {
                "id": "102",
                "lastName": "huy",
                "firstName": "gia",
                "email": "huy.dinh@hcmut.edu.vn",
                "phone": "0123784545"
            }
        },
        "outputstandard": {
            "content": "Know to use MYSQL"
        },
        "modified_date": null
    }
*/

function Question(props) {
    const test = {
        "id": 1,
        "content": "Truong DHBK co bao nhieu co so: ",
        "type": "E",
        "answerList": [
            {
                "id": "A",
                "content": "2",
                "right": true
            },
            {
                "id": "B",
                "content": "3",
                "right": false
            },
            {
                "id": "C",
                "content": "4",
                "right": false
            },
            {
                "id": "D",
                "content": "5",
                "right": false
            }
        ],
        "lecturer": {
            "employee": {
                "id": "102",
                "lastName": "huy",
                "firstName": "gia",
                "email": "huy.dinh@hcmut.edu.vn",
                "phone": "0123784545"
            },
            "subject": {
                "id": "AA0000",
                "name": "HCSDL",
                "outputstandardList": [
                    {
                        "content": "Know to create an app using database"
                    },
                    {
                        "content": "Know to design relational database"
                    },
                    {
                        "content": "Know to use MYSQL"
                    }
                ],
                "takingexams": [
                    {
                        "exam_date": "2020-12-04T17:00:00.000+00:00"
                    },
                    {
                        "exam_date": "2020-12-06T17:00:00.000+00:00"
                    },
                    {
                        "exam_date": "2020-12-07T17:00:00.000+00:00"
                    }
                ],
                "outputStandardList": [
                    {
                        "content": "Know to create an app using database"
                    },
                    {
                        "content": "Know to design relational database"
                    },
                    {
                        "content": "Know to use MYSQL"
                    }
                ]
            }
        },
        "outputstandard": {
            "content": "Know to use MYSQL"
        },
        "modified_date": null
    }

    const { 
        id,
        content,
        type,
        answerList : ansList,
        lecturer: author,
        // outStandard
     } = test

    const { 
        delete : deleteItem,
        update : updateItem
    } = props

    const [isShow, setIsShow] = useState(false)
    const [editContent, setEditContent] = useState(content)

    return (
        <div className="ques-card">

            <div className="ques-card__left">
                <div className="ques-card__left__head">
                    <label className="number">Câu hỏi số {id}:</label>
                    {" "}
                    <label className="content">Nội dung: {content}</label>
                </div>
                <div className="ques-card__left__body">
                    {
                        ansList.map(item => (
                            <div key={item.id}>
                                {`${item.id} : ${item.content} ${item.right ? "(Câu trả lời đúng)" : ""}`}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="ques-card__right">
                
                

                
                <div className="ques-card__right__head">
                    {/*set onclick and show modal here */}
                    <button 
                        onClick={() => setIsShow(prev => !prev)}
                    >Edit</button>  
                    
                    {/*set onclick and call api here */}
                    <button onClick={() => deleteItem(id)} >Delete</button>  

                </div>
                {/* modal */}
                <div className="modal">
                    {   
                        isShow &&
                        (<div>
                            <input 
                                type="text" 
                                defaultValue = {content}
                                onChange={e => setEditContent(e.target.value) } 
                            />
                            <button
                                onClick={() => updateItem(id, content, setIsShow(prev => false))}
                            >Save</button>
                        </div>)
                    }
                </div>
                
                

                <div className="ques-card__right__body">
                    {`Tác giả: ${author.employee.firstName} ${author.employee.lastName}`} 
                    <br></br>
                    {`Môn học: ${author.subject.name}`}
                    <br></br>
                    Độ Khó: {" "}
                        {type == "E" && "Dễ"}
                        {type == "M" && "Trung Bình"}
                        {type == "H" && "Khó"}
                </div>
            </div>

        </div>
    );
}

export default Question;