import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function useQuizData() {
  // const [questions, setQuestions] = useState(null)
  // const [answers, setAnswers] = useState(null)
  // const params = useParams()
  
  // useEffect(() => {
  //   axios
  //   .get(`/api/data/${params.id}`)
  //   .then((response) => {
  //     setQuestions(response.data.questions)
  //     setAnswers(response.data.answers)
  //     console.log("API response: ", response)
  //   })
  //   .catch((error) => {
  //     console.log("ERROR: ", error)
  //   });
  // }, [])

  useEffect(() => {
    axios
    .get(`/api/data/playlists/test`)
    .then((response) => {
      console.log("API response: ", response)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [])
  
  // return {questions, answers}
}