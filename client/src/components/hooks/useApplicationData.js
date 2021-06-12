import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function getQuizData() {
  const params = useParams()
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)
  
  useEffect(() => {
    axios
    .get(`/api/tests/${params.id}`)
    .then((response) => {
      setQuestions(response.data.questions)
      setAnswers(response.data.answers)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [])
  
  return {questions, answers}
}

function getPlaylistQuizData() {
  const params = useParams()
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)

  useEffect(() => {
    axios
    .get(`/api/playlists/${params.id}`)
    .then((response) => {
      console.log("API response: ", response)
      setQuestions(response.data.questions)
      setAnswers(response.data.answers)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [])
 
  return {questions, answers}

}

export { getQuizData, getPlaylistQuizData }