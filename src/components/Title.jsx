import React from 'react';

export const Title = ({ children, className }) => {
  return (

    <h1 className={`title ${className||''}`}>{children}</h1>

  );
};

export const SubTitle = ({ children }) => {
  return (
    <div className="container-title">
      <h2 className="subtitle">{children}</h2>
    </div>
  );
};

export const Title3 = ({ children, className }) => {
  return (
    <div className="container-title">
      <h3 className={`title3 ${className||''}`}>{children}</h3>
    </div>
  );
}

export const Title3ForCard = ({ children, className }) => {
  return (
    <div className="container-title">
      <h3 className={`title3  textColor ${className||''}`}>{children}</h3>
    </div>
  );
}


export const Paragraph = ({ children, className }) => {
  return (

    <p className={`title3 ${className||''}`}>{children}</p>

  );
}

export const Price = ({ children, className }) => {
  return (
    <span className={`title3 ${className}`}>{`Q. ${children}`}</span>
  )
}
export const Pre = ({ children, className }) => {
  return (
    <p className={`title3 ${className}`} dangerouslySetInnerHTML={{ __html: children }} />
  )
}



export default Title;
