import Image from 'next/image'
import css from './index.module.css'
import { EMAILS, EmailsType } from './models'

export const Emails = () => {
    return(
        <div className={css.container}>
            {EMAILS.map((item: EmailsType, index) => (
                <div key={index} className={css.item}>
                    <Image className={css.img} src='/main/mens/back.svg' width={16} height={16} alt=''/>
                    <div className={css.emailContainer}>
                        <a href='#' className={css.email}>{item.email}</a>
                        <p className={css.text}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}