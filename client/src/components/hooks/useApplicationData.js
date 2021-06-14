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
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
<<<<<<< HEAD:client/src/components/hooks/useQuizData.js
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
=======
  }, [])
  
  return {questions, answers}
}

function getPlaylistQuizData() {
  const params = useParams()
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)

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
 
  return {questions, answers}

}

export { getQuizData, getPlaylistQuizData }
>>>>>>> master:client/src/components/hooks/useApplicationData.js
