import styles from "../styles/Blog.module.css"
import { Button, Image, Form, Input } from "antd";
import { MenuUnfoldOutlined } from '@ant-design/icons'

const Blog = () => {
    const blogList = [{
        img: "./img/lab.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
        skills: ["Therapist", "Ankylologist", "Head of Department"]
    },
    {
        img: "./img/lab.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit.",
        skills: ["Therapist", "Ankylologist", "Head of Department"]
    },]
    return (
        <div className={styles.blogContainer} id="Blog">
            <div>
                <div>Blog</div>
                <div className={styles.blogHeader}>
                    <div>
                        <h3>You may be <br /> intrested to know</h3>
                        <div className={styles.blogArrow}>
                            <Button style={{ height: 60, width: 60, borderRadius: '50%', fontSize: 40, display: 'flex', justifyContent: "center", alignItems: 'center' }}>&rarr;</Button>
                            <Button style={{ height: 60, width: 60, borderRadius: '50%', fontSize: 40, display: 'flex', justifyContent: "center", alignItems: 'center' }}>&larr;</Button>
                        </div>
                    </div>
                    <div className={styles.blogList}>
                        {blogList.map((f, i) => {
                            return (
                                <div key={i}>
                                    <Image src={f.img} height={200} width={320} />
                                    <div className={styles.blogLink}>{f.skills.map((f, i) => {
                                        return (
                                            <a key={i} href="">{f}</a>
                                        )
                                    })}</div>
                                    <div>{f.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog