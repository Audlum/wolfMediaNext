
import Image from "next/image";
import css from './index.module.css'
import Header from "./ui/header";
export const Layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return<>
         <div className={css.root}>
                  <Header/>
                  {children}
            </div>
                <Image   width={1920} height={1080} src="/bcgImg.jpg" alt=""/>
    </>
}