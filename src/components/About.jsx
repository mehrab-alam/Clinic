import styles from "../styles/About.module.css";
import { Button, Image } from "antd";
const About = () => {
  const features = [
    {
      number: "01",
      description: `We use modern 
            equipments`,
    },
    {
      number: "02",
      description: `We use modern 
            equipments`,
    },
    {
      number: "03",
      description: `We use modern 
            equipments`,
    },
    {
      number: "04",
      description: `We use modern 
            equipments`,
    },
    {
      number: "05",
      description: `We use modern 
            equipments`,
    },
    {
      number: "06",
      description: `We use modern 
            equipments`,
    },
  ];
  return (
    <section className={styles.aboutContainer} id="About us">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutHeader}>
          <div>About Us</div>
          <div>&rarr;</div>
        </div>

        <div className={styles.aboutDescription}>
          <div>
            <h3>
              Audiologist Hearnic <br /> Clinic Dhanbad
            </h3>
            <p>
              The Modern Hearnic Clinic is one of the <br /> best modern hearing aid and speech <br /> therapy clinic in
              Dhanbad.
            </p>
            <a href="#Doctors">
              {" "}
              <Button className={styles.learnButton}>Learn More</Button>
            </a>
          </div>
          <div>
            Hearing problem resolving <br /> of an complexity at a <br /> fixed price
          </div>
        </div>

        <div className={styles.aboutFeatures}>
          <Image preview={false} height={165} width={300} className={styles.aboutImage} />
          <div>
            {features.map((feature, i) => {
              return (
                <div key={i}>
                  <div className={styles.aboutFeaturesNum}>{feature.number}</div>
                  <hr style={{ height: 1, backgroundColor: "#d9d9d9", border: "none" }} />
                  <div>{feature.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
