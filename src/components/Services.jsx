import styles from "../styles/Services.module.css"
import { Button, Image } from "antd";
import { PlusCircleOutlined, PhoneOutlined } from '@ant-design/icons'
import Doctors from "./Doctors";
import Review from "./Review";
import Faq from "./Faq";


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
        <div className={styles.serviceContainer} id="Services">
            <div>
                <div className={styles.serviceHeader}>
                    <div>Services</div>
                    <div>
                        <h3>Excellent services <br /> of our clinic</h3>
                        <div className={styles.serviceLinks}>
                            {links.map((f, i) => {
                                return (
                                    <a key={i} href="">{f}</a>
                                )
                            })}
                        </div>
                        <div >
                            {description.map((f, i) => {
                                return (
                                    <div key={i} className={styles.serviceDescrip}>
                                        <div>
                                            <div>{f}</div>
                                            <Button style={{ borderRadius: '50%', height: 40, width: 40, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >+</Button>
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
                            <a href="#Contact">  <Button style={{ borderRadius: '50%', height: 25, width: 25, display: 'flex', justifyContent: 'center' }} ><PhoneOutlined /></Button></a>
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



        </div>
    )
}
export default Services