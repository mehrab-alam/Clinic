import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css"
import { Button, Image, Form, Input } from "antd";
const AppointmentForm = () => {
    const [form] = Form.useForm()
    const [customerId, setCustomerId] = useState()
    console.log(customerId)

    useEffect(() => {
        fetch(`./api/db`).then(res => {
            res.json().then(data => {
                console.log('Iam here in useEffect')
                setCustomerId(data.result)
            })
        })
    }, [form])

    const onFinish = (personalDetail) => {
        let id = 1;
        if (customerId > 0) {
            id = customerId + 1
        }

        fetch(`/api/db?id=${id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(personalDetail)
        }).then(res => {
            res.json().then(data => {
                console.log(data.result)

            })
        })
        form.resetFields()
    }

    return (
        <section className={styles.formContainer} id='form'>
            <div>
                <Image src="./img/logo-input-rem.png" height={60} />
                <div className={styles.formHeader}>
                    <h3>Make an appointment <br /> with a doctor</h3>
                    <div>

                        <Form
                            name="personalDetail"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            form={form}

                            onFinish={
                                onFinish
                            }>
                            <div className={styles.aboutYourself}>About Yourself</div>
                            <div className={styles.formAboutYourself}>
                                <span className={styles.labelNames}>Full Name :</span>
                                <Form.Item name={['name']} style={{ backgroundColor: "#140e56", borderRadius: 20, height: '100%', width: 230, color: "red" }}>
                                    <Input style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                </Form.Item>
                                <div>
                                    <div className={styles.contactEmail}>
                                        <span className={styles.labelNames}>+91 :</span>
                                        <Form.Item name={['number']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 230 }}>
                                            <Input type="number" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>
                                    <div className={styles.contactEmail}>

                                        <span className={styles.labelNames}>E-mail :</span>
                                        <Form.Item name={['mail']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 230 }}>
                                            <Input type="email" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                        </Form.Item>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.dateInput}>
                                <div>Admission date</div>
                                <div>
                                    <div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Location:</span>
                                            <Form.Item name={['location']} style={{ backgroundColor: "#140e56", borderRadius: 20, color: "red", width: 230 }}>
                                                <Input style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                            </Form.Item>
                                        </div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Date :</span>
                                            <Form.Item name={['Date']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 230 }}>
                                                <Input type="Date" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Address :</span>

                                            <Form.Item name={['address']} style={{ backgroundColor: "#140e56", borderRadius: 20, color: "red", width: 230 }}>
                                                <Input style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                            </Form.Item>
                                        </div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Time :</span>
                                            <Form.Item name={['time']} style={{ backgroundColor: "#140e56", borderRadius: 20, width: 230 }}>
                                                <Input type="time" style={{ backgroundColor: "#140e56", color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, border: 'none', height: 40 }} />
                                            </Form.Item>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <Button style={{ backgroundColor: '#140e56', borderRadius: 20, width: 150 }} type="primary" htmlType="submit" >Submit</Button>
                        </Form>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AppointmentForm