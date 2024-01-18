import React from 'react';
import styles from './styles.module.scss';

export const Title = ({ children, className, id }) => {
  return (
    <h1 className={`${styles.title} ${className||''}`} id={id}>{children}</h1>
  );
};

export const SubTitle = ({ children, className,id }) => {
  return (
    <h2 className={`${styles.subtitle} ${className||''}`} id={id}>{children}</h2>
  );
};

export const SubTitlen = ({ children, className,id }) => {
  return (
    <h2 className={`${styles.subtitle_n} ${className||''}`} id={id}>{children}</h2>
  );
};

export const SubTitle2 = ({ children, className }) => {
  return (
    <h2 className={`${styles.subtitle2} ${className||''}`}>{children}</h2>
  );
};

export const Title3 = ({ children, className }) => {
  return (
    <div className="container-title">
      <h3 className={`${styles.title3} ${className || ''}`}>{children}</h3>
    </div>
  );
}

export const Title3ForCard = ({ children, className }) => {
  return (
    <div className="container-title">
      <h3 className={`${styles.title3}  textColor ${className || ''}`}>{children}</h3>
    </div>
  );
}

export const Paragraph = ({ children, className }) => {
  return (
    <p className={`${styles.title3} ${className || ''}`}>{children}</p>
  );
}

export const Price = ({ children, className }) => {
  return (
    <span className={`${styles.title3} ${className}`}>{`Q. ${children}`}</span>
  )
}

export const Pre = ({ children, className }) => {
  return (
    <p className={`${styles.title3} ${className}`} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

export default Title;