import { Emails } from './emails'
import css from './index.module.css'
import { Mens } from './mens'

export const QuestionsBlock = () => {
    return (
        <div className={css.container}>
            <h2 className={css.h1}>Есть вопрос или предложение?</h2>

            <p className={css.p}>Напишите нам!</p>

            <div className={css.mensEmails}>
                <div className={css.mens}>
                    <Mens />
                </div>
                <div className={css.emails}>
                    <Emails />
                </div>
            </div>

        </div>
    )
}