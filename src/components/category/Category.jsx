import styles from "./Category.module.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const categories = [
    { name: "Bakery", image: "/icons/bakery.png" },
    { name: "Burger", image: "/icons/burger.png" },
    { name: "Beverage", image: "/icons/coffee-cup.png" },
    { name: "Chicken", image: "/icons/chicken-leg.png" },
    { name: "Pizza", image: "/icons/pizza-slice.png" },
    { name: "Seafood", image: "/icons/seafood.png" },
  ];

  return (
    <div className={styles.categorySection}>
      <h3 className={styles.title}>Category</h3>

      <div className={styles.grid}>
        {categories.map((item, index) => (
          <CategoryCard key={index} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Category;
