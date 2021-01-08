import React from 'react';
import './Report.css';
import { data } from './MockData';
import DataItem from './DataItem';
import FullBar from './FullBar';

class Report extends React.Component {
  render(props) {
    const parseNewDate = (strDate) => {
      let result = '';

      if (strDate) {
        let parts = strDate.split('-');
        result = `${parts[1]}/${parts[2]}/${parts[0]}`;
      }

      return result;
    };
    const parsedDate = this.props.data.date.split('T')[0];
    const dataItems = data.lists.map((dataPoint, index) => (
      <li key={index}>
        <DataItem key={index} data={this.props.data} {...dataPoint}></DataItem>
      </li>
    ));
    const introList = data.prose.map((dataPoint, index) => {
      return (
        <li key={index}>
          <span className='bold'> {dataPoint.intro} </span>
          <p dangerouslySetInnerHTML={{ __html: dataPoint.text }} />
        </li>
      );
    });
    const reflectionQns = data.reflections.map((reflection, index) => (
      <li key={index}>{reflection}</li>
    ));

    return (
      <div style={{ width: 800, margin: '30px auto 50px', padding: 20 }}>
        <h2 className='title'> Student Emotion Regulation Assessment (SERA)</h2>
        <p className='title'>Personalized Data Report</p>
        <p className='title italic'>Introduction</p>
        <p>Assessment date: {parseNewDate(parsedDate)} </p>
        <p>{data.introduction}</p>
        <p>Before you review your report, please note:</p>
        <ol> {introList} </ol>
        <br />
        <h3 className='title'> Your Emotion Regulation Strategy Profile </h3>
        <br />
        <p> {data.leading} </p>
        <FullBar data={this.props.data}></FullBar>
        <br />
        <ol>{data && dataItems}</ol>
        <br />
        <h3 className='title italic'>Reflection Questions</h3>
        <ul> {reflectionQns} </ul>
        <br />
        <h3 className='title'>
          {' '}
          Mental Health Resources and Supports for Adolescents{' '}
        </h3>
        <br />
        <p>
          If you are experiencing an emotional crisis, know that there are
          resources out there to support you! Here are some resources that you
          might find helpful:
        </p>
        <p>
          <span className='bold'>Teen Line </span>
          provides support and resources to adolescents via trained peer
          counselors (see{' '}
          <a href='https://teenlineonline.org/resources/'>
            https://teenlineonline.org/resources/
          </a>
          )
        </p>
        <p>
          <span className='bold'>Trevor Project </span>
          provides support and resources to lesbian, gay, bisexual, transgender,
          queer & questioning (LGBTQ) teens (see{' '}
          <a href='https://www.thetrevorproject.org/resources/'>
            https://www.thetrevorproject.org/resources/
          </a>
          )
        </p>
        <p>
          <span className='bold'>National Suicide Prevention Lifeline </span>
          provides support and resources to people in suicidal crisis or
          emotional distress (see{' '}
          <a href='https://suicidepreventionlifeline.org/'>
            https://suicidepreventionlifeline.org/
          </a>
          )
        </p>
      </div>
    );
  }
}

export default Report;
