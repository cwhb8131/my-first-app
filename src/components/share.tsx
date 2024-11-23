import React from "react";
import {LineShareButton,
    TwitterShareButton,
    LineIcon,
    TwitterIcon,
  } from "react-share";

const URL = 'https://my-first-app-av1q.vercel.app/';
const QUOTE = '今週の夜ご飯です！';

const ShareButton = (props) => {
    return (
      <>
        <TwitterShareButton url={URL} title={QUOTE}>
          <TwitterIcon size={24} round />
        </TwitterShareButton>
        <LineShareButton url={URL} title={QUOTE} >
          <LineIcon size={24} round />
        </LineShareButton>
        
      </>
    )
  }
  
  export default ShareButton;
