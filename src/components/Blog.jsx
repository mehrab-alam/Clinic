import styles from "../styles/Blog.module.css";
import { Button, Image, Form, Input } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Blog = () => {
  const blogList = [
    {
      img: "./img/lab.jpg",
      description: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur",
      skills: ["Therapist", "Ankylologist", "Head of Department"],
    },
    {
      img: "./img/lab.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit.",
      skills: ["Therapist", "Ankylologist", "Head of Department"],
    },
  ];
  return (
    <section className={styles.blogContainer} id="Blog">
      <div>
        <div className={styles.blogHeader}>
          <div>
            <div>Blog</div>
            <h3>
              You may be <br /> intrested to know
            </h3>
            <div className={styles.blogArrow}>
              <Button className={styles.blogBtn}>&rarr;</Button>
              <Button className={styles.blogBtn}>&larr;</Button>
            </div>
          </div>
          <div className={styles.blog_list_wrapper}>
            <div className={styles.blogList}>
              {blogList.map((blog, i) => {
                return (
                  <div key={i}>
                    <Image src={blog.img} height={200} width={400} />
                    <div className={styles.blogLink}>
                      {blog.skills.map((skill, i) => {
                        return (
                          <a key={i} href="">
                            {skill}
                          </a>
                        );
                      })}
                    </div>
                    <p>{blog.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
