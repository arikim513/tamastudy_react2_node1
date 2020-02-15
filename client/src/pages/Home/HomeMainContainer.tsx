import React from 'react';
import { css } from '@emotion/core';

interface Props {}

const HomeMainContainer: React.FC<Props> = () => {
  return (
    <div>
      <div
        css={css`
          height: 80px;
          background-color: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 100px;
            height: 50px;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-size: 1.5rem;
          `}
        >
          LOGO
        </div>
      </div>
      <div
        css={css`
          height: 200px;
          background-color: black;
          color: white;
        `}
      >
        SLIDER
      </div>
      <div
        css={css`
          height: calc(100vh - 80px - 200px - 80px);
          background-color: black;
          color: white;
        `}
      >
        CONTENT
      </div>
      <div
        css={css`
          height: 40px;
          background-color: black;
          color: white;
        `}
      >
        BANNER
      </div>
      <div
        css={css`
          height: 40px;
          background-color: black;
          color: white;
        `}
      >
        FOOTER
      </div>
    </div>
  );
};

export default HomeMainContainer;
