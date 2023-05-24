import styles from "../styles/Faq.module.css"
import { Button, Image, Form, Input } from "antd";
import { MenuUnfoldOutlined } from '@ant-design/icons'
import Blog from "./Blog";
const Faq = () => {
    const description = ["Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing.",]
    const brand = [
        "./img/alkem.jpg", "./img/bioco.png", "./img/cipla.png", "./img/sun.png", "./img/reddy.jpg"
    ]
    return (
        <section className={styles.faqContainer}>
            <div className={styles.faqHeader}>
                <div>FAQ</div>
                <div>
                    <h3>Questions from <br /> our clients</h3>
                    <div>
                        {description.map((descript, i) => {
                            return (
                                <div key={i} className={styles.faqDescrip}>
                                    <div>
                                        <div>{descript}</div>
                                        <Button style={{ borderRadius: '50%', height: 40, width: 40, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >+</Button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            <div>
                <div className={styles.partner} id="Partners">
                    <div>Partners</div>
                    <div>
                        <h3>We work with <br /> these partners</h3>
                    </div>
                </div>
                <div className={styles.partnerBrand}>
                    {
                        brand.map((brandName, i) => {
                            return (
                                <div key={i}>
                                    <Image src={brandName} height={"100%"} width={"100%"} style={{ borderRadius: "50%", objectFit: 'cover' }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Faq