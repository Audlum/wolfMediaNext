import Image from "next/image"
import { NETWORK_IMG, NetworkImgType } from "./models"
import css from "./index.module.css"

export const Network = () => {
    return(
        <div className={css.networks}>
            {NETWORK_IMG.map((item: NetworkImgType, index) => (
                <a href="#"  key={index}>

                    <Image width={24} height={24} src={item.src} alt=""/>
                </a>
            ))}
        </div>
    )
}