import styles from "../styles/Contact.module.css";
import { TwitterOutlined, FacebookOutlined, WhatsAppOutlined, InstagramOutlined } from "@ant-design/icons";
import { Button, Image, Form, Input, Anchor, Select } from "antd";

const Contact = () => {
  const siteLinks = ["Home", "Services", "Contact", "Gallery", "About us", "Doctors", "Blog", "Partners"];
  const links = [
    {
      link: <InstagramOutlined style={{ fontSize: "150%", color: "#e80f25" }} />,
      id: "https://www.instagram.com/mr_mehrab_6/",
    },
    {
      link: <TwitterOutlined style={{ fontSize: "150%", color: "skyblue" }} />,
      id: "https://twitter.com/mr_mehrab1",
    },
    {
      link: <FacebookOutlined style={{ fontSize: "150%" }} />,
      id: "https://www.facebook.com/mehrab.alam.568",
    },
    {
      link: <WhatsAppOutlined style={{ fontSize: "150%", color: "green" }} />,
      id: "/",
    },
  ];
  return (
    <section className={styles.contactContainer} id="Contact">
      <div>
        <div className={styles.contactHeader}>
          <div className={styles.contactHeaderLogo}>
            <Image src="./img/ear_1.png" height={"100%"} />
            <div>
              <div>Hearnic</div>
              <div>Medical clinic</div>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "#140e56",
              color: "white",
              height: 60,
              width: 60,
              borderRadius: "50%",
              fontSize: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &uarr;
          </Button>
        </div>
        <div className={styles.contactForm}>
          <Form
            name="contactForm"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <div className={styles.formDescription}>We&apos;ll call you back</div>
            <div className={styles.formInputs}>
              <div className={styles.contactEmail}>
                <span className={styles.labelNames}>Full Name :</span>
                <Form.Item name={["full name"]} className={styles.formItem}>
                  <Input type="text" className={styles.inputField} />
                </Form.Item>
              </div>
              <div className={styles.contactEmail}>
                <span className={styles.labelNames}>+91 :</span>
                <Form.Item name={["email"]} className={styles.formItem}>
                  <Input type="email" className={styles.inputField} />
                </Form.Item>
              </div>
              <div className={styles.contactEmail}>
                <span className={styles.labelNames}>age</span>
                <Form.Item name={["number"]} className={styles.formItem}>
                  <Input type="number" className={styles.inputField} />
                </Form.Item>
              </div>
              <div className={styles.contactEmail}>
                <span className={styles.labelNames}>E-mail :</span>
                <Form.Item name={["email"]} className={styles.formItem}>
                  <Input type="email" className={styles.inputField} />
                </Form.Item>
              </div>
              <Button className={styles.submitBtn} type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className={styles.contactFooter}>
          <div>
            <div>Site Map</div>
            <div className={styles.siteLinks}>
              {siteLinks.map((link, i) => {
                return (
                  <a style={{ color: "#eee" }} key={i} href={`#${link}`}>
                    {link}
                  </a>
                );
              })}
            </div>
            <div>
              <span>&copy;</span>Hearnic,All rights reserved
            </div>
          </div>
          <div>
            <div>We are on socail media</div>
            <div className={styles.socialLinks}>
              {links.map((link, i) => {
                return (
                  <a href={`${link.id}`} key={i}>
                    {link.link}
                  </a>
                );
              })}
            </div>
            <div className={styles.privacyLink}>
              <Anchor
                items={[
                  {
                    key: "privacy",
                    href: "privacy",
                    title: "Privacy Policy",
                  },
                ]}
              />
              <Anchor
                items={[
                  {
                    key: "T&C",
                    href: "T&C",
                    title: "Terms & Conditions",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
