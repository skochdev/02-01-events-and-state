import { Box } from '../Box';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import * as S from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'middle',
  };

  nameInputId = nanoid();
  surnameInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.resetFormFields();
  };

  resetFormFields = () => {
    this.setState({ name: '', surname: '' });
  };

  render() {
    const { name, surname, experience } = this.state;
    const { handleChange, handleSubmit, nameInputId, surnameInputId } = this;

    return (
      <Box>
        <S.Form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
            Name
            <input
              type="text"
              name="name"
              id={nameInputId}
              value={name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor={surnameInputId}>
            Surname
            <input
              type="text"
              name="surname"
              id={surnameInputId}
              value={surname}
              onChange={handleChange}
              checked={experience === 'junior'}
            />
          </label>

          <p>Your seniority level:</p>
          <Box as="ul" display="flex" mb={4}>
            <Box as="li">
              <label>
                <input
                  type="radio"
                  name="experience"
                  onChange={handleChange}
                  checked={experience === 'junior'}
                  value="junior"
                />
                Junior
              </label>
            </Box>
            <li>
              <label>
                <input
                  type="radio"
                  name="experience"
                  onChange={handleChange}
                  checked={experience === 'middle'}
                  value="middle"
                />
                Middle
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="experience"
                  onChange={handleChange}
                  checked={experience === 'senior'}
                  value="senior"
                />
                Senior
              </label>
            </li>
          </Box>

          <Box as="button" display="block" mr="auto" ml="auto" type="submit">
            Submit
          </Box>
        </S.Form>
      </Box>
    );
  }
}
