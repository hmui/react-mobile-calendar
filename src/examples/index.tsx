// import { ReactHashCalendar } from '../components';
import React from 'react';

const ReactHashCalendar = require('../components').ReactHashCalendar;

const state = {
  defaultDatetime: new Date(),
  dateTime: new Date(),
  isShowCalendar: false,
  clanderRef: null as any,
  markDate: [
    '2020/11/24',
    '2020/11/22',
    {
      color: 'red',
      type: 'dot',
      date: [
        '0',
        '2020/02/25',
        '2020/03/25',
        '2020/04/01',
        '2020/05/25',
        '2020/06/25',
        '2020/07/25',
        '2020/08/25',
        '2020/09/25',
        '2020/10/25',
        '2020/11/25',
        '2020/12/25',
        '2023/12/05',
        '2023/12/20',
      ],
    },
    {
      color: 'blue',
      type: 'circle',
      date: [
        '2020/01/20',
        '2020/02/20',
        '2020/03/20',
        '2020/04/20',
        '2020/05/20',
        '2020/06/20',
        '2020/07/20',
        '2020/08/20',
        '2020/09/20',
        '2020/10/20',
        '2020/11/20',
      ],
    },
    {
      color: 'pink',
      date: [
        '2020/01/12',
        '2020/02/12',
        '2020/03/12',
        '2020/04/12',
        '2020/05/12',
        '2020/06/12',
        '2020/07/12',
        '2020/08/12',
        '2020/09/12',
        '2020/10/12',
        '2020/11/12',
        '2020/12/12',
      ],
    },
    {
      color: '#000000',
      date: [
        '2020/01/29',
        '2020/02/29',
        '2020/03/29',
        '2020/04/29',
        '2020/05/29',
        '2020/06/29',
        '2020/07/29',
        '2020/08/29',
        '2020/09/29',
        '2020/10/29',
        '2020/11/29',
        '2020/12/29',
      ],
    },
  ],
};

type State = typeof state;

class Examples extends React.Component<{}, State, {}> {
  public state: State = state;

  handleVisibleChange = (isShowCalendar: boolean) => {
    this.setState({ isShowCalendar });
  };

  showCalendar = () => {
    this.setState({ isShowCalendar: true });
  };

  dateClick = (date?: any) => {
    console.log('Examples -> dateClick -> date', date);
    this.setState({ dateTime: new Date(date) })
  };

  dateConfirm = (date?: string | Date) => {
    console.log('Examples -> dateConfirm -> date', date);
  };

  disabledDate = (date: Date): boolean => {
    let timestamp = date.getTime();
    let oneDay = 24 * 60 * 60 * 1000;

    if (timestamp < new Date().getTime() - oneDay) {
      return true;
    }
    return false;
  };

  onRef = (ref: any) => {
    this.setState({
      clanderRef: ref
    })
  }

  setDay = () => {
    console.log('set day')
    const {clanderRef} = this.state

    clanderRef?.setDate( new Date('2023-12-06') )
  }

  render() {
    const { isShowCalendar, markDate, defaultDatetime, dateTime } = this.state;
    return (
      <div>
        <button onClick={this.showCalendar}>显示</button>
        <ReactHashCalendar
          pickerType="datetime"
          model="dialog"
          disabledScroll=""
          isShowWeekView={true}
          showTodayButton={true}
          disabledWeekView={false}
          disabledDate={this.disabledDate}
          isShowAction={true}
          lang="CN"
          visible={isShowCalendar}
          onVisibleChange={this.handleVisibleChange}
          dateClickCallback={this.dateClick}
          dateConfirmCallback={this.dateConfirm}
          format="YY/MM/DD hh:mm"
          markDate={markDate}
          scrollChangeDate={true}
          markType="dotcircle"
          weekStart="Sunday"
          defaultDatetime={defaultDatetime}
          minuteStep={1}
        />

        <div>
        <button onClick={this.setDay}>设置某天</button></div>
        <ReactHashCalendar
          pickerType="date"
          model="inline"
          onRef={this.onRef}
          disabledScroll=""
          isShowWeekView={true}
          showTodayButton={true}
          disabledWeekView={false}
          disabledDate={this.disabledDate}
          isShowAction={true}
          lang="CN"
          dateClickCallback={this.dateClick}
          format="YY-MM-DD"
          markDate={markDate}
          scrollChangeDate={true}
          markType="dotcircle"
          weekStart="monday"
          defaultDatetime={defaultDatetime}
          value={dateTime}
          minuteStep={1}
        />
      </div>
    );
  }
}

export default Examples;
