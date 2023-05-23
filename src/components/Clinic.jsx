import { useEffect } from "react"
import About from "./About"
import AppointmentForm from "./AppointmentForm"
import Blog from "./Blog"
import Contact from "./Contact"
import Doctors from "./Doctors"
import Faq from "./Faq"
import Gallery from "./Gallery"
import Home from "./Home"
import Review from "./Review"
import Services from "./Services"



const Clinic = () => {


    return (
        <div style={{ overflow: 'hidden' }}>
            <div>
                <Home />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Doctors />
            </div>
            <div>
                <Review />
            </div>
            <div>
                <AppointmentForm />
            </div>
            <div>
                <Faq />
            </div>
            <div>
                <Blog />
            </div>
            {/* <div>
                <div className={styles.contactContainer}>
                    <div>
                        <div className={styles.contactHeader}>
                            <div className={styles.contactHeaderLogo}>
                                <Image src="./img/ear_1.png" height={'100%'} />
                                <div>
                                    <div>Hearnic</div>
                                    <div>Medical clinic</div>
                                </div>
                            </div>
                            <Button style={{ backgroundColor: '#140e56', color: 'white', height: 60, width: 60, borderRadius: '50%', fontSize: 40, display: 'flex', justifyContent: "center", alignItems: 'center' }}>&uarr;</Button>

                        </div>
                        <div className={styles.contactForm}>
                            <Form
                                name="contactForm"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}>
                                <div className={styles.formDescription}>We'll call you back</div>
                                <div className={styles.formInputs}>
                                    <div className={styles.contactEmail}>
                                        <span className={styles.labelNames}>+91 :</span>
                                        <Form.Item name={['number']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 280 }}>
                                            <Input type="number" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>
                                    <div className={styles.contactEmail}>

                                        <span className={styles.labelNames}>E-mail :</span>
                                        <Form.Item name={['email']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 280 }}>
                                            <Input type="email" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>
                                    <div className={styles.contactEmail}>
                                        <span className={styles.labelNames}>+91 :</span>
                                        <Form.Item name={['number']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 280 }}>
                                            <Input type="number" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>
                                    <div className={styles.contactEmail}>

                                        <span className={styles.labelNames}>E-mail :</span>
                                        <Form.Item name={['email']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 280 }}>
                                            <Input type="email" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>
                                    <Button style={{ backgroundColor: '#140e56', borderRadius: 20, width: 150 }} type="primary" htmlType="submit" >Submit</Button>

                                </div>

                            </Form>
                        </div>
                        <div className={styles.contactFooter}>
                            <div>
                                <div>Site Map</div>
                                <div className={styles.siteLinks}>
                                    {siteLinks.map((l, i) => {
                                        return (
                                            <Anchor
                                                style={{ color: 'white' }}
                                                key={i}
                                                items={[
                                                    {
                                                        key: i,
                                                        href: `#${l}`,
                                                        title: l,
                                                    },
                                                ]} >{l}</Anchor>
                                        )
                                    })}

                                </div>
                                <div><span>&copy;</span>Hearnic,All rights reserved</div>
                            </div>
                            <div>
                                <div>We are on socail media</div>
                                <div className={styles.socialLinks}>
                                    {links.map((l, i) => {
                                        return (
                                            // <Anchor

                                            //     items={[{
                                            //         key: i,
                                            //         href: "/",
                                            //         title: l
                                            //     }]} />
                                            <a href="Home" key={i}>{l}</a>
                                        )
                                    })}
                                </div>
                                <div className={styles.privacyLink}>
                                    <Anchor

                                        items={[
                                            {
                                                key: 'privacy',
                                                href: 'privacy',
                                                title: 'Privacy Policy',
                                            },

                                        ]} />
                                    <Anchor

                                        items={[
                                            {
                                                key: 'T&C',
                                                href: 'T&C',
                                                title: 'Terms & Conditions',
                                            },
                                        ]} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div> */}
            <div>
                <Contact />
            </div>
        </div>
    )
}
export default Clinic