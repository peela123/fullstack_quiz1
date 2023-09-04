
import React, { useState } from 'react';
import { Input, Button, Card, Title, Stack } from '@mantine/core';
import Donation from './donation';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    donationAmount: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    donationAmount: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Added isLoading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    // A simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Disable the submit button to prevent multiple clicks
    setIsLoading(true);

    // Check for blank fields
    const errors = {};
    let hasErrors = false;

    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = `${field} is required.`;
        hasErrors = true;
      }
    }

    // Check for invalid email
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    setFormErrors(errors);

    if (hasErrors) {
      setIsLoading(false); // Re-enable the submit button
      return;
    }

    // Simulate a delay for form submission (you can replace this with your actual submission logic)
    setTimeout(() => {
      setIsLoading(false); // Re-enable the submit button after the submission is complete
      console.log('Form data submitted:', formData);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form onSubmit={handleSubmit}>
        <Stack spacing="xs">
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isLoading} // Disable input when submitting
            />
            {formErrors.firstName && (
              <Input.Error>{formErrors.firstName}</Input.Error>
            )}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={isLoading} // Disable input when submitting
            />
            {formErrors.lastName && (
              <Input.Error>{formErrors.lastName}</Input.Error>
            )}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading} // Disable input when submitting
            />
            {formErrors.email && (
              <Input.Error>{formErrors.email}</Input.Error>
            )}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              disabled={isLoading} // Disable input when submitting
            />
            {formErrors.donationAmount && (
              <Input.Error>{formErrors.donationAmount}</Input.Error>
            )}
          </Input.Wrapper>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </Stack>
      </form>
    </Card>
  );
}