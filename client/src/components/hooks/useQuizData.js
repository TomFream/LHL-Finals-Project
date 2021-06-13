import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function useQuizData() {
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
      console.log("API response: ", response)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [params.id])

  // useEffect(() => {
  //   axios
  //   .get(`/api/data/playlists/test`)
  //   .then((response) => {
  //     console.log("API response: ", response)
  //   })
  //   .catch((error) => {
  //     console.log("ERROR: ", error)
  //   });
  // }, [])
  
  return {questions, answers, score, setScore}
}