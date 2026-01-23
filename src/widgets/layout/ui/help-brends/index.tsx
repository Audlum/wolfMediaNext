import { HelpBlock } from './help-blocks'
import css from './index.module.css'

export default function HelpBrends(){
    return(
        <section className={css.section}>
            <h1 className={css.h1}>Помогаем брендам наладить коммуникацию с аудиторией</h1>

            <p className={css.textNetworks}>Социальные сети&nbsp;&mdash; идеальная площадка для размещения нативной рекламы, она встраивается в&nbsp;ленту пользователя, вызывает большее доверие у&nbsp;аудитории, обходит блокировщики рекламы, и&nbsp;органически набирает огромные охваты.</p>

            <HelpBlock/>

            <div className={css.btnContainer}>
            <button className={css.btn}>Рекламное сотрудничество</button>
            </div>

        </section>
    )
}