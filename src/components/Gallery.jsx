import styles from "../styles/Gallery.module.css";
import { Button, Image } from "antd";
import { TwitterOutlined, FacebookOutlined, WhatsAppOutlined, InstagramOutlined } from "@ant-design/icons";

const Gallery = () => {
  const options = ["# Clinic", "# Audiologist", "# Therapy", "# Truthfulness", "# Trust"];
  const links = [
    <InstagramOutlined style={{ fontSize: "2.1rem", color: "#e80f25" }} key={0} />,
    <TwitterOutlined style={{ fontSize: "2.1rem", color: "skyblue" }} key={1} />,
    <FacebookOutlined style={{ fontSize: "2rem" }} key={2} />,
    <WhatsAppOutlined style={{ fontSize: "2rem", color: "green" }} key={3} />,
  ];
  return (
    <section className={styles.galleryContainer} id="Gallery">
      <div>
        <div className={styles.galleryDescription}>
          <div>Gallery</div>

          {/* <img src=".img/telegram-1.png" alt="" /> */}
          <div>
            <h3>
              Check out our clinic <br /> great galllery
            </h3>
            <div className={styles.galleryFeatures}>
              {options.map((option, i) => {
                return (
                  <a key={i} href="">
                    {option}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.galleryLinks}>
            {links.map((link, i) => {
              return (
                <a href="" key={i}>
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.galleryUpload}>
        <div>
          <Image preview={false} height={550} width={450} className={styles.galleryImg} />
          <div>
            <span>01</span>
            <span>/</span>
            <div>
              <div className={styles.therapy}>Collection of therapy</div>
              <div className={styles.discount}>The boy got a 50% discount</div>
            </div>
          </div>
        </div>
        <div>Drag</div>
        <div>
          <Image preview={false} height={400} width={450} className={styles.galleryImg} />
          <div>
            <span>01</span>
            <span>/</span>
            <div>
              <div className={styles.therapy}>Collection of therapy</div>
              <div className={styles.discount}>The boy got a 50% discount</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
