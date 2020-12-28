import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="container-title">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export const SubTitle = ({ title }) => {
  return (
    <div className="container-title">
      <h2 className="subtitle">{title}</h2>
    </div>
  );
};

export const Title3 = ({title}) => {
  return (
    <div className="container-title">
      <h3 className="title3">{title}</h3>
    </div>
  );
}

export const Paragraph = ({children}) => {
  return (
    <div className="container-title">
      <p className="title3">{children}</p>
    </div>
  );
}
export default Title;
