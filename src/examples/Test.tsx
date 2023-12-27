// import { ReactHashCalendar } from '../components';
import { ReactHashCalendar } from '../../lib';
import React, { useEffect, createRef, useState } from 'react';

// const ReactHashCalendar = require('../components').ReactHashCalendar;

const Test = () => {
  const actionRef = createRef<any>()
  const [markDate, setMarkDate] = useState([])


  const dateClick = (date?: any) => {
    console.log('Test -> dateClick -> date', date);
  };

  const setDay = () => {
    console.log('actionref = ', actionRef.current)
    actionRef.current.setValue(new Date('2023-12-30'))
  }
  
  return (
      <div>

        <div>
          <button onClick={setDay}>设置某天</button>
        </div>
        <ReactHashCalendar
          pickerType="date"
          model="inline"
          ref={actionRef}
          disabledScroll=""
          isShowWeekView={true}
          showTodayButton={true}
          disabledWeekView={false}
          isShowAction={false}
          lang="CN"
          dateClickCallback={dateClick}
          format="YY-MM-DD"
          markDate={markDate}
          scrollChangeDate={true}
          markType="dotcircle"
          weekStart="monday"
          // defaultDatetime={defaultDatetime}
          minuteStep={1}
        />
      </div>
  )
}

export default Test;
