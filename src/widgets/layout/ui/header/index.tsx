'use client'

// import Link from 'next/link'
import Image from 'next/image'
import css from './index.module.css'
import { Navigation } from './navigation'
import { Network } from '@/shared/ui/network-img'

export default function Header() {




  return (
    <header className={css.header}>

      <div className={css.logoAndNav}>
        <Image src="/header/logoHeader.png" className={css.logo} alt="" width={286} height={70}/>
        <Navigation/>
      </div>

      <div className={css.contacts}>
        <div className={css.network}>

        <Network />
        </div>

        <div className={css.phone}>
          <Image width={24} height={24} src="/header/phone-call.png" alt="" />
          <a href='#' className={css.phoneText}>+7 495 257 55 65</a>
        </div>
        
        <a href='#' className={css.btn}>
          Написать нам
        </a>

        <a href="#" className={css.mail}>
          <Image src="/header/mail.svg" width={24} height={24} alt=''/>
        </a>

      </div>
    </header>
  )
}