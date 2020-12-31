import React from 'react';
import '../styles/components/title.scss'

export const Title = ({ children,className }) => {
  return (
    <div className="container-title">
      <h1 className={`title ${className}`}>{children}</h1>
    </div>
  );
};

export const SubTitle = ({ children }) => {
  return (
    <div className="container-title">
      <h2 className="subtitle">{children}</h2>
    </div>
  );
};

export const Title3 = ({ children }) => {
  return (
    <div className="container-title">
      <h3 className="title3">{children}</h3>
    </div>
  );
}

export const Paragraph = ({ children, className }) => {
  return (

    <p className={`title3 ${className}`}>{children}</p>

  );
}

export const Price = ({children, className}) => {
  return (
    <span className={`title3 ${className}`}>{`Q. ${children}`}</span>
  )
}
export const Pre = ({children, className}) => {
  return (
    <pre className={`title3 ${className}`}>{`${children}`}</pre>
  )
}



export default Title;
