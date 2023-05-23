import { Button, Image } from "antd";
import { PlusCircleOutlined, PhoneOutlined } from '@ant-design/icons'
import styles from "../styles/Doctors.module.css"

const Doctors = () => {
    const listOfDoctors = [{
        img: "./img/doc4.jpg",
        name: "Dr.Shyam Khurana",
        experience: "Work Experience-8years",
        skills: ["Therapist", "Ankylologist", "Head of Department"]
    },
    {
        img: "./img/doc5.jpg",
        name: "Dr.Rashmi Thakur",
        experience: "Work Experience-8years",
        skills: ["Therapist", "Otolaryngologist", "Chief doctor"]
    },
    {
        img: "./img/doc6.jpg",
        name: "Dr.Rani Kohli",
        experience: "Work Experience-8years",
        skills: ["Therapist", "Otolaryngologist", "Intern"]
    },
    {
        img: "./img/doc4.jpg",
        name: "Dr.Nikhil Nanda",
        experience: "Work Experience-8years",
        skills: ["Therapist", "Audiologist", "Intern"]
    },
    {
        img: "./img/doc5.jpg",
        name: "Dr.Radhika Sharma",
        experience: "Work Experience-8years",
        skills: ["Therapist", " audiologist", "Intern"]
    },
    {
        img: "./img/doc6.jpg",
        name: "Dr.Shyam Khurana",
        experience: "Work Experience-8years",
        skills: ["Therapist", "Ankylologist", "Head of Department"]
    }
    ]
    return (
        <div className={styles.doctorContainer} id="Doctors" >
            <div>
                <div>Doctors</div>
                <div>
                    <div className={styles.doctorHeader}>
                        <div>
                            <h3>Aid specialists and <br /> audiologists</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed repellat sint <br /> aut reiciendis neque </p>
                        </div>
                        <div>
                            All doctors <span>&rarr;</span>
                        </div>
                    </div>
                    <div className={styles.docProfile}>
                        {listOfDoctors.map((f, i) => {
                            return (
                                <div key={i}>
                                    <Image style={{ backgroundColor: '#f4f1f1e6', objectFit: 'cover' }} src={f.img} width={250} height={250} />
                                    <div className={styles.docName}>{f.name} </div>
                                    <div className={styles.docExp}>{f.experience} </div>
                                    <div className={styles.docSkills}>
                                        {f.skills.map((s, i) => {
                                            return (
                                                <a key={i} href="">{s}</a>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctors