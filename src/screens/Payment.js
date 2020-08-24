import React from 'react';
import WebView from 'react-native-webview';

const Payment = (props) => {
  return (
    <WebView
      source={{
        uri: props.route.params.url,
      }}
    />
  );
};

export default Payment;
