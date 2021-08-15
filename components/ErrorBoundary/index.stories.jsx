import React, { useState } from 'react';
import { ErrorBoundary } from '.';
import { Button } from '../Button';


export default {
  title: 'Layout/ErrorBoundary',
  component: ErrorBoundary,
};

const ErrorComponent = () => {
  throw Error('An error has occurred')
}

// A button which causes an error to be thrown from inside itself.
const CauseErrorButton = () => {
  const [error, setError] = useState(false);

  return <>
    <Button
      onClick={() => setError(true)}
      label='Cause error'
    />
    { error && <ErrorComponent />}
  </>

}

const Template = (args) => <ErrorBoundary {...args} />;

export const ErrorButton = Template.bind({});
ErrorButton.args = {
  size: 'default',
  variation: 'default',
  children: [
    <CauseErrorButton key='errorButton' />
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  children: [
    <ErrorComponent key='error' />
  ],
}