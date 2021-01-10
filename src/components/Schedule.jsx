import React from 'react';
import { SubTitle2, Paragraph } from './Title';

import '../styles/components/schedule.scss';

const Schedule = () => {
  return(
    <div className="schedule">
      <SubTitle2>Horario</SubTitle2>
      <Paragraph className="info">Lunes a Viernes de 8:30 a.m. a 5:00 p.m <br/> Sábados previa cita</Paragraph>
    </div>
  )
}

export default Schedule;