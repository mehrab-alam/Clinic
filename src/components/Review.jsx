import styles from "../styles/Review.module.css";
import { Button, Image } from "antd";

const Review = () => {
  return (
    <section className={styles.reviewContainer}>
      <div>
        <div className={styles.reviewHeader}>
          <div>Review</div>

          <div>
            <h3>
              Feedback from our <br /> favourite customers
            </h3>
            <p>
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div>
            All reviews <span>&rarr;</span>
          </div>
        </div>

        <div className={styles.reviewContent}>
          <Image className={styles.reviewImage} src="./img/girl-doc.png" height={200} width={200} />
          <div>
            <div>,,</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae facere quas voluptatibus maiores
              ipsum omnis iusto ratione temporibus! Provident iusto quis nesciunt aspernatur blanditiis non ut dolores
              voluptas numquam laborum!
              <div>
                <div>Tannu Jha</div>
                <div className={styles.reviewTime}>5 days old</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
