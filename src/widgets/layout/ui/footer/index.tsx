import Image from 'next/image'
import css from './index.module.css'
import { Network } from '@/shared/ui/network-img'

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <Image className={css.logo} src='/footer/logo.svg' width={208} height={51} alt='' />
                <Image className={css.logoMini} src='/footer/logoMini.svg' width={50} height={51} alt='' />
                <p className={css.p}>Copyright 2019 (c) All rights reserved.</p>
                <div className={css.networkPhone}>
                    <div className={css.network}>

                        <Network />
                    </div>
                    <div className={css.phone}>
                        <Image src='/footer/phone.svg' width={24} height={24} alt='' />
                        <a href='#'>+7 495 257 55 65</a>
                    </div>
                </div>

            </div>
            <p className={css.pAdaptiv}>Copyright 2019 (c) All rights reserved.</p>
        </footer>
    )
}