import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import style from 'styles/pages/approvalhistory.module.css'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

export default function Approvalhistory() {
  return (
    <div className={style.approval_details_wrap}>
      <div className={style.approval_details_list}>
        <div className={style.approval_did}>
          <p>금월 신청한 경비</p>
          <p>103,500</p>
        </div>
        <div className={style.approval_will}>
          <p>신청 가능한 경비</p>
          <p>496,500</p>
        </div>
      </div>
      <div className={style.approval_menu}>
        <p>17건</p>
        <div className={style.approval_menu_icon}>
          <Image src='assets/images/icons/list.svg' alt='list' width={15} height={15} />
          <p>최신순</p>
        </div>
      </div>
      <div className={style.approval_used_list_wrap}>
        <Image src='assets/images/icons/return.svg' alt='return' width={50} height={50} />
        <div className={style.approval_used_list}>
          <p>조선갈비탕</p>
          <p>030501-00001</p>
        </div>
        <div className={style.approval_status_d}>
          <p>반려</p>
        </div>
      </div>
      <div className={style.approval_used_list_wrap}>
        <Image src='assets/images/icons/sand.svg' alt='sand' width={50} height={50} />
        <div className={style.approval_used_list}>
          <p>GS칼텍스</p>
          <p>032437-00002</p>
        </div>
        <div className={style.approval_status_w}>
          <p>대기</p>
        </div>
      </div>
      <div className={style.approval_used_list_wrap}>
        <Image src='assets/images/icons/check.svg' alt='check' width={50} height={50} />
        <div className={style.approval_used_list}>
          <p>조선갈비탕</p>
          <p>032427-00001</p>
        </div>
        <div className={style.approval_status_y}>
          <p>승인</p>
        </div>
      </div>
      <div className={style.approval_used_list_wrap}>
        <Image src='assets/images/icons/check.svg' alt='check' width={50} height={50} />
        <div className={style.approval_used_list}>
          <p>조선갈비탕</p>
          <p>032427-00001</p>
        </div>
        <div className={style.approval_status_y}>
          <p>승인</p>
        </div>
      </div>
      <div className={style.approval_used_list_wrap}>
        <Image src='assets/images/icons/check.svg' alt='check' width={50} height={50} />
        <div className={style.approval_used_list}>
          <p>조선갈비탕</p>
          <p>032427-00001</p>
        </div>
        <div className={style.approval_status_y}>
          <p>승인</p>
        </div>
      </div>
      <div className={style.approvalMoreBtn}>
        <Button size={'lg'} >더보기</Button>
      </div>
    </div>
  )
}

Approvalhistory.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='결재내역 조회'>
      {page}
    </BackTitleLayout>
  )
}
