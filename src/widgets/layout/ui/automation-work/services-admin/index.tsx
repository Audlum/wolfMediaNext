import { MoreBtn } from '@/shared/ui/moreBtn'
import Image from 'next/image'
import css from './index.module.css'
import { SERVICES_ADMIN, ServicesAdminType } from './models'

export const ServiceAdmin = () => {
    return (
        <div>
            <p className={css.p}>Услуги для администраторов</p>

            <div className={css.srvicesContainer}>
                {SERVICES_ADMIN.map((item: ServicesAdminType, index) => (
                    <div key={index} className={css.servicesItem}>
                        <Image className={css.img} src={item.img} width={44} height={44} alt='' />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className={css.btnContaine}>
                <MoreBtn />
            </div>


        </div>
    )
}