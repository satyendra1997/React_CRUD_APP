import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { postdata, getDataById, updateData } from "../utils/services";
import { validation } from "../utils/validations";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateForm = () => {
  const [formField, setFormField] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    question: "",
  });
  const [formFieldError, setFormFieldError] = useState({
    nameError: "",
    emailError: "",
    questionError: "",
    mandatoryError: "",
    successmsg: "",
  });
  const param = useParams();
  const history = useNavigate();
  useEffect(() => {
    console.log(param.id);
    getDataById(param.id)
      .then(({ id, name, email, question }) => {
        setFormField({
          id,
          name,
          email,
          question,
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);
  const [isSuccess, setSuccess] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    //console.log(e);
    setFormField((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formField.name === "" ||
      formField.email === "" ||
      formField.question === ""
    ) {
      setFormFieldError({ mandatoryError: "All the field is mandotary!!!" });
      return;
    }
    if (validation.namevalidation(formField.name)) {
      setFormFieldError({ nameError: "Name length must be more than 2" });
      return;
    }
    if (validation.emailvalidation(formField.email)) {
      setFormFieldError({ emailError: "Please Fill Valid email address" });
      return;
    }
    if (validation.noOfQuestionsvalidation(formField.question)) {
      setFormFieldError({ questionError: "Question must be more than 0" });
      return;
    }

    updateData(formField, formField.id)
      .then((res) => {
        setFormFieldError({ successmsg: "Data Submitted Successfully😍😍😍" });
        setSuccess(true);

        toast.success(res);
        setFormFieldError({ successmsg: "Data Submitted Successfully😍😍😍" });
      })
      .catch((error) => {
        setFormFieldError({ mandatoryError: "Some Error Occurred!!!😢😢😢" });
        toast.error(error);
      });
  };

  const onCancel = () => {
    history("/view");
  };

  return (
    <div id="contactDiv">
      <ToastContainer />
      <form id="contact" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formField.name}
          onChange={handleOnchange}
        />
        <span>{formFieldError.nameError}</span>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formField.email}
          onChange={handleOnchange}
        />
        <span>{formFieldError.emailError}</span>
        <label>Number Of Questions:</label>
        <input
          type="number"
          name="question"
          value={formField.question}
          onChange={handleOnchange}
        />
        <span>{formFieldError.questionError}</span>
        <br />
        <div id="updateButton">
          <input id="update" type="Submit" value="Update" />
          <input
            id="cancel"
            type="cancel"
            onClick={() => {
              onCancel();
            }}
            value="Back"
          />
        </div>

        <span>
          {isSuccess
            ? formFieldError.successmsg
            : formFieldError.mandatoryError}
        </span>
      </form>
    </div>
  );
};
export default UpdateForm;
