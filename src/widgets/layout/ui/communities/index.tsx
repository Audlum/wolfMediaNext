import css from './index.module.css'
import { CommunitiesBlock } from './type-communities'

export default function Communities(){
    return(
        <section className={css.section}>
            <h1 className={css.h1}>Более 150 тематических сообществ</h1>

            <CommunitiesBlock/>

            <p className={css.pBottom}>Присутствуем на всех популярных платформах</p>

        </section>
    )
}