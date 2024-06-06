import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'

function CardList() {
  return (
    <div className={styles.container}>CardList
    <Pagination/>
    </div>
  )
}

export default CardList