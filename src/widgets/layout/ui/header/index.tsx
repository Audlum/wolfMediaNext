'use client'

// import Link from 'next/link'
import Image from 'next/image'
import css from './index.module.css'
import { Navigation } from './navigation'
import { Network } from '@/shared/ui/network-img'
import { useState } from 'react'
import clsx from 'clsx'

export default function Header() {

  const [isModal, setIsModal] = useState<boolean>(false)
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const showModal = () => {
    setIsModal(true)
    setIsMenu(false)
  }
  const closeModal = () => {
    setIsModal(false)
  }
  const showMenu = () => {
    setIsMenu(true)
  }
  const closeMenu = () => {
    setIsMenu(false)
  }



  return (
    // <header className={css.header} >
    <header className={clsx(css.header, { [css.activeHeaderMenu]: isMenu || isModal})}>

      <div className={css.logoAndNav}>
        <Image onClick={showMenu} src="/header/showMenu.svg" className={clsx(css.showMenu, { [css.btnStatusMenu]: isMenu })} alt="" width={24} height={24} />
        <div className={clsx(css.showMenu, { [css.btnStatusMenu]: !isMenu })}>
          <Image onClick={closeMenu} src="/header/closeMenu.svg" alt="" width={16} height={16} />
        </div>

        <Image src="/header/logoHeader.png" className={css.logo} alt="" width={286} height={70} />
        <Image src="/header/logoMini.svg" className={css.logoMini} alt="" width={40} height={40} />
        <div className={css.nav}>

          <Navigation />
        </div>
      </div>

      <div className={css.contacts}>
        <div className={css.network}>

          <Network />
        </div>

        <div className={css.phone}>
          <Image className={css.phoneImg} width={24} height={24} src="/header/phone-call.png" alt="" />
          <a href='#' className={css.phoneText}>+7 495 257 55 65</a>
        </div>

        <a href='#' className={css.btn}>
          Написать нам
        </a>

        <a href="#" className={css.mail} onClick={showModal}>
          <Image src="/header/mail.svg" width={24} height={24} alt='' />
        </a>

      </div>


      {isModal &&
        <>

          <div className={css.modalOverlay}></div>

          <form className={css.formContainer}>

            <div className={css.form}>
              <p className={css.titleForm}>Написать нам</p>

              {/* <div className={css.inputContainer}>
                <input type="text" placeholder='Ваше имя' />
                <input type="text" placeholder='Ваш телефон' />
                <textarea placeholder='Ваше сообщение' />
              </div> */}

              <div className={css.inputContainer}>
                <div className={css.fieldWrapper}>
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Ваше имя</label>
                </div>

                <div className={css.fieldWrapper}>
                  <input type="text" id="phone" placeholder=" " required />
                  <label htmlFor="phone">Ваш телефон</label>
                </div>

                <div className={css.fieldWrapper}>
                  <textarea id="message" placeholder=" " required></textarea>
                  <label htmlFor="message">Ваше сообщение</label>
                </div>
              </div>

              <button className={css.btnForm} type='submit'>Отправить</button>
              <p className={css.approvalText}>Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных</p>

            </div>

            <button onClick={closeModal}>
              <Image src='/header/closeModal.svg' width={17} height={17} alt='' />
            </button>

          </form>

        </>

      }

      {isMenu &&
        <>

          <div className={css.modalOverlay}></div>

          <div className={css.menu}>
            <div className={css.navMenu}>
              <Navigation />
            </div>

            <div className={css.contactsMenu}>
              <div className={css.phoneMenu}>
                <Image className={css.phoneImgMenu} width={24} height={24} src="/header/phone-call.png" alt="" />
                <a href='#' className={css.phoneTextMenu}>+7 495 257 55 65</a>
              </div>
              <button onClick={showModal} className={css.btnMenu}>
                Написать нам
              </button>
            </div>

          </div>
        </>
      }



    </header>
  )
}