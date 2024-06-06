import Featured from "@/component/featured/Featured";
import styles from "./homepage.module.css"
import CategoryList from "@/component/categoryList/CategoryList";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/menu/Menu";

export default function Home() {
  return <div className={styles.component}>
    <Featured/>
    <CategoryList/>
    <div className={styles.component}>
      <CardList/>
      <Menu/>
    </div>
  </div>;
}
