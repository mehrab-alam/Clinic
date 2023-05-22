import styles from "../styles/Review.module.css"
import { Button, Image } from "antd";
import { PlusCircleOutlined, PhoneOutlined } from '@ant-design/icons'
import AppointmentForm from "./AppointmentForm";
import Faq from "./Faq";
const Review = () => {
    return (
        <div className={styles.reviewContainer}>
            <div>
                <div>Review</div>
                <div className={styles.aboutReview}>
                    <div className={styles.reviewHeader}>
                        <div>
                            <h3>Feedback from our <br /> favourite customers</h3>
                            <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            All reviews <span>&rarr;</span>
                        </div>
                    </div>
                    <div className={styles.reviewContent}>
                        <Image style={{ borderRadius: '50%', border: '1px solid gray', objectFit: 'cover', backgroundColor: '#f4f1f1e6' }} src="./img/girl-doc.png" height={'0%'} width={'100%'} />
                        <div>
                            <div>,,</div>
                            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae facere quas voluptatibus maiores ipsum  omnis iusto ratione temporibus! Provident  iusto quis nesciunt aspernatur blanditiis non ut dolores voluptas numquam laborum!
                                <div>
                                    <div>Tannu Jha</div>
                                    <div className={styles.reviewTime}>5 days old</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Review