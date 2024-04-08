import { Button, Image } from "antd";
import { PlusCircleOutlined, PhoneOutlined } from "@ant-design/icons";
import styles from "../styles/Doctors.module.css";

const Doctors = () => {
  const listOfDoctors = [
    {
      img: "./img/doc4.jpg",
      name: "Dr.Shyam Khurana",
      experience: "Work Experience-8years",
      skills: ["Therapist", "Ankylologist", "Head of Department"],
    },
    {
      img: "./img/doc5.jpg",
      name: "Dr.Rashmi Thakur",
      experience: "Work Experience-8years",
      skills: ["Therapist", "Otolaryngologist", "Chief doctor"],
    },
    {
      img: "./img/doc6.jpg",
      name: "Dr.Rani Kohli",
      experience: "Work Experience-8years",
      skills: ["Therapist", "Otolaryngologist", "Intern"],
    },
    {
      img: "./img/doc4.jpg",
      name: "Dr.Nikhil Nanda",
      experience: "Work Experience-8years",
      skills: ["Therapist", "Audiologist", "Intern"],
    },
    {
      img: "./img/doc5.jpg",
      name: "Dr.Radhika Sharma",
      experience: "Work Experience-8years",
      skills: ["Therapist", " audiologist", "Intern"],
    },
    {
      img: "./img/doc6.jpg",
      name: "Dr.Shyam Khurana",
      experience: "Work Experience-8years",
      skills: ["Therapist", "Ankylologist", "Head of Department"],
    },
  ];
  return (
    <section className={styles.doctorContainer} id="Doctors">
      <div>
        <div className={styles.doc_info}>
          <div>Doctors</div>

          <div className={styles.doctorHeader}>
            <div>
              <h3>
                Aid specialists and <br /> audiologists
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed repellat sint <br /> aut reiciendis
                neque{" "}
              </p>
            </div>
            <div>
              All doctors <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div className={styles.docs_profile_wrapper}>
          <div className={styles.docProfile}>
            {listOfDoctors.map((docs, i) => {
              return (
                <div key={i}>
                  <Image className={styles.docImg} src={docs.img} width={350} height={300} />
                  <div className={styles.docName}>{docs.name} </div>
                  <div className={styles.docExp}>{docs.experience} </div>
                  <div className={styles.docSkills}>
                    {docs.skills.map((skill, i) => {
                      return (
                        <a key={i} href="">
                          {skill}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Doctors;
