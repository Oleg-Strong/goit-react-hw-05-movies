import { Formik, ErrorMessage } from 'formik';
import {
  FormInput,
  FormWrapper,
  FormButtont,
  Message,
  ButtontIcon,
} from './SearchForm.styled';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    searchQuery: '',
  };
  let scima = yup.object().shape({
    searchQuery: yup
      .string('not valid input')
      // .matches(
      //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      //   'not valid input'
      // )
      .required('Enter something to search!'),
  });
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={scima}
    >
      <FormWrapper>
        <FormInput
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search movies"
        />
        <FormButtont type="submit">
          <ButtontIcon />
        </FormButtont>
        <ErrorMessage name="searchQuery">
          {errMsg => <Message>{errMsg}</Message>}
        </ErrorMessage>
      </FormWrapper>
    </Formik>
  );
};

export default SearchForm;
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
