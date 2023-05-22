import { Image, Anchor, Button } from 'antd'
import styles from "../styles/Hearnic.module.css"

const Home = () => {
    const links = ['Home', 'About Us', 'Specialists', 'Doctors', 'Contact']
    const images = ["./img/old-man-1.jpeg", "./img/old-man-2.jpeg", "./img/old-man-3.jpeg", "./img/old-man-4.jpeg"]
    return (
        <div className={styles.clinincContainer} id='Home'>

            <img className={styles.backgroundImage} src="./img/hearnic-background.jpeg" />
            <div className={styles.header}>
            </div>

            <div className={styles.headerContent}>
                <div style={{ color: 'white' }}>
                    HEARNIC</div>
                <div className={styles.headerLinks}>
                    {/* <Anchor
                        style={{}}
                        direction='horizontal'
                        items={[links.map(f => {
                            console.log(f)
                            return (
                                {
                                    key: f,
                                    href: '/',
                                    title: f,
                                }
                            )
                        })]}
                    /> */}
                    {links.map((f, i) => {
                        return (
                            <a href={`#${f}`} key={i}>{f}</a>
                            // <Anchor key={i}
                            //     direction='horizontal'
                            //     items={[{
                            //         key: i,
                            //         href: '/',
                            //         title: f,
                            //     }]}
                            // >{f}</Anchor>
                        )
                    })}
                </div>
                <div className={styles.contactLink}>  <a href="/">+91-909090009000</a></div>

            </div>
            <div className={styles.descriptions}>
                <div >
                    <h3>
                        Over past decade,we have <br /> provided hundreds of hearing <br /> aids and speech thearpy <br /> services.
                    </h3>
                    <div>
                        <h3>Facts</h3>
                        <p>Premium equipment that meets state-of-the-art in <br /> the hearing industry.</p>
                        <hr />
                        <p>Professionals in their field,who can be trusted and <br /> get the best results.</p>

                    </div>
                </div>
                <div>
                    <div className={styles.userCard}>
                        <div>
                            <div className={styles.userCardImages}>
                                {images.map((f, i) => {
                                    return (
                                        <img key={i} src={f} />
                                    )
                                })}
                            </div>
                            <div>1000+</div>
                            <div>Satisfied patients</div>
                        </div>
                        <div>
                            Take the discount for the first visit of an audiologist
                        </div>
                        <div>
                            <div>20%</div>
                            <a href="#form"> <Button style={{ width: 130, fontSize: 10, fontWeight: 'bold' }} >Make an appointment</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;