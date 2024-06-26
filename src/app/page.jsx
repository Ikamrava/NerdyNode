import Featured from "@/component/featured/Featured";
import styles from "./homepage.module.css"
import CategoryList from "@/component/categoryList/CategoryList";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/menu/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList page={page}/>
      <Menu/>
    </div>
  </div>;
}
