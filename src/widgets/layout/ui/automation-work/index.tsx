import css from './index.module.css'
import { Technology } from './technology'

export default function AutomationWork(){
    return(
        <section className={css.section}>
            <h1 className={css.h1}>Мы полностью автоматизировали работу по управлению сообществами</h1>

            <p className={css.p}>Чем больше сообществ в&nbsp;активе, тем больше времени требуется на&nbsp;планирование, ведение и&nbsp;сбор статистики.</p>

            <Technology/>

        </section>
    )
}