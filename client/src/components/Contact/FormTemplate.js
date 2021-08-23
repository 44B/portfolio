import React from "react"
import { Formik, Form, Field } from "formik"
import { sendEmail } from "./SendEmail"
import { senderSchema } from "./validation/SenderSchema"

const FormTemplate = () => {
  return (
    <Formik
      initialValues={{
        email_address: "",
        first_name: "",
        last_name: "",
        phone_number: undefined,
        description: "",
      }}
      validationSchema={senderSchema}
      onSubmit={sender_data => {
        sendEmail(
          sender_data.email_address,
          sender_data.first_name,
          sender_data.last_name,
          sender_data.phone_number,
          sender_data.description
        )
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <div className="form_child_container">
            <div className="form_grandchild_container">
              <div className="form_placement">
                <div className="form_label">First Name</div>
                <label>Phone Number</label>
                <Field
                  id="phone_number"
                  type="text"
                  name="first_name"
                  className="form_input"
                />
                <div className="errors">
                  {errors.first_name && touched.first_name ? (
                    <div> {errors.first_name} </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="form_grandchild_container">
              <div className="form_placement">
                <div className="form_label">Last Name</div>
                <Field
                  id="email_address"
                  type="text"
                  name="last_name"
                  className="form_input"
                />
                <div className="errors">
                  {errors.last_name && touched.last_name ? (
                    <div> {errors.last_name} </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="form_child_container">
            <div className="form_grandchild_container">
              <div className="form_placement">
                <div className="form_label">Email Address</div>
                <label>Phone Number</label>
                <Field
                  id="phone_number"
                  type="email"
                  name="email_address"
                  className="form_input"
                />
                <div className="errors">
                  {errors.email_address && touched.email_address ? (
                    <div> {errors.email_address} </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="form_grandchild_container">
              <div className="form_placement">
                <div className="form_label">
                  <label>Email Address</label>
                  Phone Number • <i className="optional">Optional</i>
                </div>
                <Field
                  id="email_address"
                  type="text"
                  name="phone_number"
                  className="form_input"
                />
                <div className="errors">
                  {errors.phone_number && touched.phone_number ? (
                    <div> {errors.phone_number} </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="form_grandchild_container">
            <div className="form_placement">
              <label className="form_label">Description</label>
              <Field as="textarea" type="text" name="description" />
              <div className="errors">
                {errors.description && touched.description ? (
                  <div> {errors.description} </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="form_button_group">
            <div className="form_button_group_child">
              <input
                className="button_style_one form_button"
                value="Send"
                type="submit"
              />
            </div>

            <div className="form_button_group_child">
              <a
                className="button_style_one form_email_app_button"
                href="mailto:m.ashrahfi@gmail.com"
              >
                open default email client
              </a>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormTemplate