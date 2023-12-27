# 按照惯例，先上效果图

![calendar.gif](https://www.hxkj.vip/demo/calendar/calendar.gif)
![dot.gif](https://www.hxkj.vip/demo/calendar/dot.gif)
![week.gif](https://www.hxkj.vip/demo/calendar/week.gif)

# react-mobile-calendar-lib

- 支持手势滑动操作
- 上下滑动 切换 周/月 模式
  > 【周模式中】 左右滑动可切换 上一周/下一周
  > 【月模式中】 左右滑动可切换 上一月/下一月

# 安装使用说明

```
npm i react-mobile-calendar-lib
```

```
import { ReactHashCalendar } from 'react-mobile-calendar-lib'

function App () {
  return (
    <div className="App">
      <ReactHashCalendar model="inline"></ReactHashCalendar>
    </div>
  );
}

export default App;
```

# API

| 属性                | 说明                                                                                                                                                                                                                                                                                                                                                 |                 类型                  |      默认      |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------: | :------------: |
| visible             | 控制日历组件的显示或隐藏,需使用 `.sync` 修饰符                                                                                                                                                                                                                                                                                                       |                boolean                |     false      |
| onVisibleChange     | 日历显示状态改变时调用，参数为 { visible }                                                                                                                                                                                                                                                                                                           |      (visible: boolean) => void       |       -        |
| scrollChangeDate    | 控制滑动的时候是否修改选中的日期                                                                                                                                                                                                                                                                                                                     |                boolean                |      true      |
| model               | 日历组件以哪种形式展示。inline：内联的方式。dialog：弹窗的方式                                                                                                                                                                                                                                                                                       |                string                 |     inline     |
| defaultDatetime     | 指定默认时间。                                                                                                                                                                                                                                                                                                                                       |                 Date                  |      now       |
| format              | 确认日期时，回调事件返回的日期格式。如“YY/MM/DD hh:mm” 、“YY 年 MM 月第 DD 天，当前时间 hh 时 mm 分”、“MM DD,YY at hh:mm F”                                                                                                                                                                                                                          |                string                 | YY/MM/DD hh:mm |
| weekStart           | 以星期几作为日历每一周的起始星期。可选['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']                                                                                                                                                                                                                                 |                string                 |     sunday     |
| pickerType          | 选择器类型 datetime：日期+时间 date：日期 time：时间                                                                                                                                                                                                                                                                                                 |                string                 |    datetime    |
| showTodayButton     | 是否显示返回今日按钮                                                                                                                                                                                                                                                                                                                                 |                boolean                |      true      |
| isShowWeekView      | 是否以周视图展示组件                                                                                                                                                                                                                                                                                                                                 |                boolean                |     false      |
| isShowAction        | 是否显示日历组件操作栏（标题栏）                                                                                                                                                                                                                                                                                                                     |                boolean                |      true      |
| disabledWeekView    | 禁用周视图（设置为 true 后，无法上下滑动进行周/月切换）                                                                                                                                                                                                                                                                                              |                boolean                |     false      |
| disabledDate        | 设置日期的禁用状态，参数为当前日期，要求返回 boolean （禁用该日期需返回 true）                                                                                                                                                                                                                                                                       |               Function                |       -        |
| disabledScroll      | 设置日历的禁止滑动方向。可选['left', 'right', 'up', 'down', 'horizontal', 'vertical', 'all', ''] 。可取其一控制单个方向。                                                                                                                                                                                                                            |                string                 |       ''       |
| markDate            | 需要被标记的日期，可按不同颜色不同标记类型分组标记（不分组默认蓝色）。如：[{color: 'red',date: ['2019/02/25']},{color: 'blue',type: 'dot',date: ['2019/01/20']},'2019/03/20']                                                                                                                                                                        |                 Array                 |       []       |
| markType            | 标记图案类型 dot：小圆点（日期下方小圆点标记） circle：小圆圈（日期被小圆圈包围） dot+circle：同时使用小圆点与圆圈标记                                                                                                                                                                                                                               |                string                 |      dot       |
| minuteStep          | 间隔时间。（分钟的步长）                                                                                                                                                                                                                                                                                                                             |                number                 |       1        |
| lang                | 选择的语言版本。可选值:['CN', 'EN']                                                                                                                                                                                                                                                                                                                  |                string                 |       CN       |
| dateClickCallback   | 日历被点击时调用，参数为 { date }。（返回的日期格式取决于 format 属性）                                                                                                                                                                                                                                                                              |    (date: Date \| string) => void     |       -        |
| dateConfirmCallback | 点击确定按钮时调用，参数为 { date }。（返回的日期格式取决于 format 属性）                                                                                                                                                                                                                                                                            |    (date: Date \| string) => void     |       -        |
| touchStartCallback  | 开始滑动日历时调用，参数为 { event }                                                                                                                                                                                                                                                                                                                 |   (event: React.TouchEvent) => void   |       -        |
| touchMoveCallback   | 日历滑动中时调用，参数为 { event }                                                                                                                                                                                                                                                                                                                   |   (event: React.TouchEvent) => void   |       -        |
| touchEndCallback    | 日历滑动结束时调用，参数为 { event }                                                                                                                                                                                                                                                                                                                 |   (event: React.TouchEvent) => void   |       -        |
| slideChangeCallback | 日历滑动的方向，参数为 { direction }。（返回值有 right、left、up、down 其中之一）                                                                                                                                                                                                                                                                    |      (direction: string) => void      |       -        |
| weekSlot            | 自定义星期内容。例如可用于自定义星期样式等等，参数为 { week }。                                                                                                                                                                                                                                                                                      |   (week: string) => React.ReactNode   |       -        |
| daySlot             | 自定义日期内容。例如可用于添加农历之类的。参数为 { date, extendAttr }，其中 extendAttr 参数包含 `isMarked`（该日期是否被标记）、`isDisabledDate`（该日期是否被禁用）、`isToday`（该日期是否为今天）、`isChecked`（该日期是否被选中）、`isCurrentMonthDay`（该日期是否为本月日期）、`isFirstDayOfMonth`（该日期是否为当月第一天），可用于一些特殊需求 | (date, extendAttr) => React.ReactNode |       -        |
| todaySlot           | 自定义 "今天" 按钮文字内容以及样式                                                                                                                                                                                                                                                                                                                   |         () => React.ReactNode         |       -        |
| confirmSlot         | 自定义 "确定" 按钮文字内容以及样式                                                                                                                                                                                                                                                                                                                   |         () => React.ReactNode         |       -        |
| actionSlot          | 自定义操作栏（标题栏）内容以及样式                                                                                                                                                                                                                                                                                                                   |         () => React.ReactNode         |       -        |
| onRef               | 实例(ref.setValue(date: Date)设置日期)                                                                                                                                                                                                                                                                                                               |             (ref) => ref              |       -        |
| ref                 | 实例(ref.current.setValue(date: Date)设置日期)                                                                                                                                                                                                                                                                                                       |        React.MutableRefObject         |       -        |

## Other

- 如果有其他问题， 或者功能上不兼容的。可以邮件沟通 1373531908@qq.com，或者 github 提交 issue。

<!-- ## 赞助

![pay.jpg](https://www.hxkj.vip/demo/calendar/pay.jpg) -->
