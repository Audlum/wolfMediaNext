
import Image from "next/image";
import css from './index.module.css'
import Header from "./ui/header";
import { Footer } from "./ui/footer";
export const Layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
    <div>

         <div className={css.root}>

              <Header/>
              {children}
              <Footer/>

          </div>
          <Image className={css.img}  width={1920} height={1080} src="/bcgImg.jpg" alt=""/>
    </div>
    )
}