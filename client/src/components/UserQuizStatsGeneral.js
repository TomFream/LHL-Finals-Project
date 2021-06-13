import * as React from 'react';
import { Chart } from 'react-google-charts';
// import { Container } from '@material-ui/core';

const UserQuizStatsGeneral = () => {
  return (
    
      <Chart
        width={'500px'}
        heigh={'350px'}
        chartType="PieChart"
        loader={<h2>Loading...</h2>}
        data={[
          ['Type of Answers', 'Number of Answers'],
          ["Correct", 17],
          ["Incorrect", 3]
        ]}
        options={{
          title: "Your Performance"
        }}
      />
    
  );
}

export default UserQuizStatsGeneral;