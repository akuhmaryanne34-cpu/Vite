import styles from "./Popular.module.css";
import PopularCard from "./PopularCard";

const Popular = ({ addToCart }) => {
  const dishes = [
    { id: 1, name: "FishBurger", price: 5.59, image: "/images/fishBurger.jpg" },
    { id: 2, name: "BeefBurger", price: 5.59, image: "/images/beefBurger.jpg" },
    {
      id: 3,
      name: "CheeseBurger",
      price: 5.59,
      image: "/images/cheeseBurger.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Popular Dishes</h3>
        <span>View all</span>
      </div>

      <div className={styles.grid}>
        {dishes.map((dish) => (
          <PopularCard key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
