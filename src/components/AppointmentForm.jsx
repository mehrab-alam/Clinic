import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css"
import { Button, Image, Form, Input, Modal } from "antd";
const AppointmentForm = () => {
    const [form] = Form.useForm()
    const [state, setState] = useState({ visible: false })
    const [empty, setempty] = useState({ visible: false })
    const [booked, setBooked] = useState({ visible: false })

    const onFinish = (personalDetail) => {
        if (personalDetail.name === undefined || personalDetail.number == undefined || personalDetail.mail === undefined || personalDetail.address === undefined) {
            {
                setempty({ visible: true })
            }
        } else {
            console.log(`tihs is value ${personalDetail.value}`)

            fetch(`/api/appointment`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(personalDetail)
            }).then(res => {
                res.json().then(data => {
                    console.log(data)
                    if (data.status === ' appointment booked') {
                        {
                            setBooked({ visible: true })
                        }
                    }

                    else if (data.result === 'it is already exist') {
                        setState({ visible: true })

                    }

                })

            })
            form.resetFields()
        }


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
                                <Form.Item name={['name']} className={styles.formItem} >
                                    <Input autoComplete="null" className={styles.inputField} />
                                </Form.Item>
                                <div>
                                    <div className={styles.contactEmail}>
                                        <span className={styles.labelNames}>+91 :</span>
                                        <Form.Item name={['number']} className={styles.formItem} >
                                            <Input type="number" className={styles.inputField} />
                                        </Form.Item>
                                    </div>
                                    <div className={styles.contactEmail}>

                                        <span className={styles.labelNames}>E-mail :</span>
                                        <Form.Item name={['mail']} className={styles.formItem}>
                                            <Input type="email" className={styles.inputField} />
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
                                            <Form.Item name={['location']} className={styles.formItem}>
                                                <Input className={styles.inputField} />
                                            </Form.Item>
                                        </div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Date :</span>
                                            <Form.Item name={['Date']} className={styles.formItem}>
                                                <Input type="Date" className={styles.inputField} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Address :</span>

                                            <Form.Item name={['address']} className={styles.formItem}>
                                                <Input className={styles.inputField} />
                                            </Form.Item>
                                        </div>
                                        <div className={styles.contactEmail}>
                                            <span className={styles.labelNames}>Time :</span>
                                            <Form.Item name={['time']} className={styles.formItem}>
                                                <Input className={styles.inputField} type="time" />
                                            </Form.Item>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <Button className={styles.submitBtn} type="primary" htmlType="submit"  >Submit</Button>
                            <Modal
                                title="Appointment Form"
                                open={state.visible}
                                onOk={() => setState(!state.visible)}
                            >
                                <p>Your already booked the appointment</p>
                            </Modal>
                            <Modal
                                title="Appointment Form"
                                open={empty.visible}
                                onOk={() => setempty(!empty.visible)}
                            >
                                <p>First fill the form</p>
                            </Modal>
                            <Modal
                                title="Appointment Form"
                                open={booked.visible}
                                onOk={() => setBooked(!booked.visible)}
                            >
                                <p>Your appointment is booked</p>
                                <p>We'll reach you soon</p>
                            </Modal>
                        </Form>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default AppointmentForm