import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <div>
      <button onClick={signOut}>Sign out</button>
      </div>
  );
}

export default withAuthenticator(App);