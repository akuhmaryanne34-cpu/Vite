import styles from "./CategoryFilter.module.css";

const categories = [
  { id: 1, name: "Burger", image: "/icons/burger.png", isNew: true },
  { id: 2, name: "Pizza", image: "/icons/pizza-slice.png", isNew: true },
  { id: 3, name: "Coffee", image: "/icons/coffee-cup.png", isNew: false },
  { id: 4, name: "Chicken", image: "/icons/chicken-leg.png", isNew: true },
  { id: 5, name: "Seafood", image: "/icons/seafood.png", isNew: false },
  { id: 6, name: "Bakery", image: "/icons/bakery.png", isNew: true },
];

function CategoryFilter() {
  const newCount = categories.filter((cat) => cat.isNew).length;

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h3>Categories</h3>
          <p>{newCount}+ New categories added this week</p>
        </div>

        <button className={styles.viewMore}>View More →</button>
      </div>

      {/* LIST */}
      <div className={styles.list}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={cat.image} alt={cat.name} />
              {cat.isNew && <span className={styles.badge}>NEW</span>}
            </div>
            <p className={styles.name}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
