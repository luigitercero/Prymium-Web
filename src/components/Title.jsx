import React from 'react';
import '../styles/components/title.scss'

export const Title = ({ children }) => {
  return (
    <div className="container-title">
      <h1 className="title">{children}</h1>
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

export const Paragraph = ({ children }) => {
  return (

    <p className="title3">{children}</p>

  );
}

export const Price = ({children}) => {
  return (
    <span className="price">{`Q. ${children}`}</span>
  )
}
export const Pre = ({children}) => {
  return (
    <pre className="title3">{`${children}`}</pre>
  )
}



export default Title;
