import { Formik } from "formik";
import Spinner from "react-bootstrap/Spinner";
import api from "../../utils/api";
import * as Yup from "yup";
import { useState } from "react";
import { StyledField,
  FormStyledField,
  ButtonForm,ErrorMessage,
  IMask,} from '../../styles'

interface FormValues {
  name: string;
  email: string;
  whats: string;
  company: string;
  mktShare: string;
  employees: string;
}

export const FormTable = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShow = () => setShow(true);


  const INITIAL_VALUES: FormValues = {
    name: "",
    email: "",
    whats: "",
    company: "",
    mktShare: "",
    employees: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório.").min(6,"asasas"),
    email: Yup.string()
      .email("O e-mail deve ser um e-mail válido")
      .required("O campo é obrigatório."),
    whats: Yup.string().required("O campo é obrigatório."),
    company: Yup.string().required("O campo é obrigatório."),
    mktShare: Yup.string().required("O campo é obrigatório."),
    employees: Yup.string().required("O campo é obrigatório."),
  });

  function handleSubmit(values: FormValues) {
    setLoading(true);
    api.post("/leads/create", { ...values, source: "lp_campaign" });
    setLoading(false);
    handleShow();
  }
  return(
  <div>
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={schema}
                onSubmit={handleSubmit}
                validateOnMount
              >
                {({
                  handleSubmit,
                  isValid,
                  handleChange,
                  errors,
                  handleBlur,
                  values,
                  touched,
                }) => (
                  <FormStyledField onSubmit={handleSubmit}>
                    <StyledField
                      type="text"
                      name="name"
                      placeholder="Nome"
                      id="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    ></StyledField>
                    {touched.name && errors.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}

                    <StyledField
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    ></StyledField>
                    {touched.email && errors.email ? (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    ) : null}

                    <StyledField
                      type="text"
                      name="whats"
                      id="whats"
                      as={IMask}
                      mask="(00)00000-0000"
                      placeholder="Telefone/Whatsapp"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.whats}
                    ></StyledField>
                    {touched.whats && errors.whats ? (
                      <ErrorMessage>{errors.whats}</ErrorMessage>
                    ) : null}

                    <StyledField
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Nome da sua empresa"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.company}
                    ></StyledField>
                    {touched.company && errors.company ? (
                      <ErrorMessage>{errors.company}</ErrorMessage>
                    ) : null}

                    <StyledField
                      type="text"
                      name="mktShare"
                      id="mktShare"
                      placeholder="Segmento"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.mktShare}
                    ></StyledField>
                    {touched.mktShare && errors.mktShare ? (
                      <ErrorMessage>{errors.mktShare}</ErrorMessage>
                    ) : null}

                    <StyledField
                      type="string"
                      name="employees"
                      id="employees"
                      placeholder="Qnt de funcionários"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.employees}
                    ></StyledField>
                    {touched.employees && errors.employees ? (
                      <ErrorMessage>{errors.employees}</ErrorMessage>
                    ) : null}

                    <ButtonForm type="submit" disabled={!isValid}>
                      {!loading ? (
                        "Receber contato"
                      ) : (
                        <Spinner animation="border" size="sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      )}
                    </ButtonForm>
                  </FormStyledField>
                )}
              </Formik>
            </div>
  )
}