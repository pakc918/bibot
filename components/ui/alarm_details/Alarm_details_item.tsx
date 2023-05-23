import React from 'react'
import style from '@/components/ui/alarm_details/Alarm_details_item.module.css'

export default function Alarm_details_item() {
  return (
    <>
      <div className={style.alarm_board}>
        <p>결재가 완료 되었습니다.</p>
        <p className={style.alarm_words}>2023-04-25</p>
      </div>
      
    </>
  )
}
