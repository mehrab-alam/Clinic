import styles from "../styles/Services.module.css"
import { Button } from "antd";
import { PhoneOutlined } from '@ant-design/icons'

const Services = () => {
    const links = ["All", "For adults", "For children"]
    const description = ["Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    ]
    return (
        <section className={styles.serviceContainer} id="Services">
            <div>
                <div className={styles.serviceHeader}>
                    <div>Services</div>
                    <div>
                        <h3>Excellent services <br /> of our clinic</h3>
                        <div className={styles.serviceLinks}>
                            {links.map((link, i) => {
                                return (
                                    <a key={i} href="">{link}</a>
                                )
                            })}
                        </div>
                        <div >
                            {description.map((descript, i) => {
                                return (
                                    <div key={i} className={styles.serviceDescrip}>
                                        <div>
                                            <div>{descript}</div>
                                            <Button className={styles.plusButton}  >+</Button>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.serviceFooter}>
                    <div className={styles.serviceDiscount}>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div>
                            <div>50%</div>
                            <a href="#Contact">  <Button className={styles.phoneButton}  ><PhoneOutlined /></Button></a>
                        </div>
                    </div>
                    <div>
                        <img src="./img/girl-doc.png" alt="" />
                        <div className={styles.doctorInto}>
                            <div>,,</div>
                            <div>
                                <div> Lorem ipsum dolor sit amet consectetur  adipisicing elit.Lorem ipsum dolor sit amet.  </div>
                                <div>Dr. Arti sukhla</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services