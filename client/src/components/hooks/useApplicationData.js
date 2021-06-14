import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function getQuizData() {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [score, setScore] = useState(0);
  const params = useParams();
  
console.log("params.id", params);

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
  }, [params.id])
  
  return {questions, answers, score, setScore}
}

function getPlaylistQuizData() {
  const params = useParams()
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
    .get(`/api/playlists/${params.playlist_name}`)
    .then((response) => {
      console.log("API response: ", response)
      setQuestions(response.data.questions)
      setAnswers(response.data.answers)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [])
 
  return {questions, answers, score, setScore}
}

export { getQuizData, getPlaylistQuizData }
