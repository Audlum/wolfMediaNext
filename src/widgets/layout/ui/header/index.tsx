'use client'

// import Link from 'next/link'
import Image from 'next/image'
import css from './index.module.css'
import { Navigation } from './navigation'
import { Network } from './network-img'

export default function Header() {




  return (
    <header className={css.header}>

      <div className={css.logoAndNav}>
        <Image src="/header/logoHeader.png" alt="" width={286} height={70}/>
        <Navigation/>
      </div>

      <div className={css.contacts}>
        <Network/>

        <div className={css.phone}>
          <Image width={24} height={24} src="/header/phone-call.png" alt="" />
          <p className={css.phoneText}>+7 495 257 55 65</p>
        </div>
        
        <button className={css.btn}>
          НАПИСАТЬ НАМ
        </button>
      </div>
    </header>
  )
}