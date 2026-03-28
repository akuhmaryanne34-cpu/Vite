import styles from "./RightbarHeader.module.css";
import { MessageText1, Notification, Setting2 } from "iconsax-react";

const RightbarHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icons}>
        <MessageText1 size="20" />
        <Notification size="20" />
        <Setting2 size="20" />
      </div>

      <img src="/icons/burger.png" alt="profile" className={styles.profile} />
    </div>
  );
};

export default RightbarHeader;
