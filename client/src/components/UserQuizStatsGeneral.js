import * as React from 'react';
import { Chart } from 'react-google-charts';
// import { Container } from '@material-ui/core';

const UserQuizStatsGeneral = (props) => {
  console.log("UserQuizStatsGeneral", props.score);

  const correct = eval(props.score);
  const incorrect = 1 - correct;

  return (
      <Chart
        width={'100%'}
        heigh={'350px'}
        chartType="PieChart"
        loader={<h2>Loading...</h2>}
        data={[
          ['Type of Answers', 'Number of Answers'],
          ["Correct", correct],
          ["Incorrect", incorrect]
        ]}
        options={{
          title: "Your Performance",
          is3D: true,
        }}
      />
    
  );
}

export default UserQuizStatsGeneral;