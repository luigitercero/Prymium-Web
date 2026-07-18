import React from 'react';
import styles from './privacy.module.scss';

const Privacy = () => {
  return (
    <div className={`container ${styles.privacy_page}`}>
      <div className={styles.privacy_header}>
        <h1 className={styles.privacy_title}>Política de Privacidad</h1>
        <p className={styles.privacy_date}>Última actualización: julio 2026</p>
      </div>

      <div className={styles.privacy_body}>

        <section className={styles.section}>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>Lavatrastos Prymium</strong> (en adelante, «Prymium» o «la empresa») es la entidad responsable
            del tratamiento de los datos personales recopilados a través de sus canales digitales, incluyendo
            su sitio web y las integraciones con plataformas de mensajería.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos cuando interactúas con nosotros:</p>
          <ul>
            <li>Nombre y apellidos.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Número de teléfono.</li>
            <li>Contenido de las conversaciones iniciadas a través de nuestros canales de mensajería.</li>
            <li>Información técnica del dispositivo (dirección IP, tipo de navegador, sistema operativo).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Análisis de conversaciones mediante Inteligencia Artificial</h2>
          <p>
            Prymium utiliza tecnología de <strong>Inteligencia Artificial (IA)</strong> para analizar las
            conversaciones que los usuarios mantienen con nuestros canales de atención (p. ej., chats de
            servicio al cliente). Este análisis se realiza en un <strong>entorno privado y controlado</strong>,
            propiedad de Prymium, con el único propósito de:
          </p>
          <ul>
            <li>Mejorar la calidad de la atención al cliente.</li>
            <li>Identificar consultas frecuentes y optimizar respuestas.</li>
            <li>Detectar tendencias de interés en productos y servicios.</li>
          </ul>
          <p>
            Los datos procesados <strong>no se comparten con terceros</strong> ni se utilizan para entrenar
            modelos de IA externos. Todo el procesamiento ocurre en infraestructura propia de Prymium.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Finalidad del tratamiento</h2>
          <p>Utilizamos tus datos con las siguientes finalidades:</p>
          <ul>
            <li>Atender consultas y solicitudes de información sobre nuestros productos.</li>
            <li>Gestionar relaciones comerciales y pedidos.</li>
            <li>Mejorar nuestros servicios mediante el análisis de interacciones (IA en entorno privado).</li>
            <li>Cumplir con obligaciones legales aplicables en Guatemala.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Base legal del tratamiento</h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul>
            <li><strong>Tu consentimiento</strong>, proporcionado al iniciar una conversación o completar un formulario de contacto.</li>
            <li><strong>La ejecución de una relación precontractual o contractual</strong> cuando solicitas información sobre un producto o realizas una compra.</li>
            <li><strong>El interés legítimo</strong> de Prymium para mejorar sus servicios de forma interna.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Conservación de los datos</h2>
          <p>
            Los datos personales se conservan únicamente durante el tiempo necesario para cumplir las
            finalidades descritas y, en cualquier caso, no más de <strong>24 meses</strong> desde el último
            contacto, salvo que la ley exija un plazo diferente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Compartición de datos con terceros</h2>
          <p>
            Prymium <strong>no vende ni cede</strong> tus datos personales a terceros. Únicamente podemos
            compartirlos con:
          </p>
          <ul>
            <li>Proveedores de servicios tecnológicos que actúan como encargados del tratamiento bajo acuerdo de confidencialidad.</li>
            <li>Autoridades competentes cuando así lo exija la ley guatemalteca.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Seguridad de los datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a
            accesos no autorizados, pérdida o divulgación, incluyendo cifrado en tránsito y en reposo,
            y acceso restringido al personal autorizado.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Tus derechos</h2>
          <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
          </ul>
          <p>
            Para ejercer estos derechos, contacta con nosotros en{' '}
            <a href="mailto:info@prymium.com">info@prymium.com</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Uso de Meta (Facebook / Instagram)</h2>
          <p>
            Nuestra aplicación puede integrarse con plataformas de Meta (Facebook e Instagram) para
            gestionar conversaciones de clientes. En ese contexto, los mensajes recibidos a través de
            estas plataformas podrán ser analizados en nuestro entorno privado de IA con el único fin de
            mejorar la atención al cliente. Prymium actúa de acuerdo con la{' '}
            <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">
              Política de datos de Meta
            </a>{' '}
            y las condiciones de uso de la API de Messenger.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Cambios en esta política</h2>
          <p>
            Prymium puede actualizar esta Política de Privacidad periódicamente. Publicaremos la versión
            actualizada en esta misma URL con la fecha de última modificación. Te recomendamos revisarla
            con regularidad.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política o el tratamiento de tus datos, puedes contactarnos en:
          </p>
          <address className={styles.address}>
            <strong>Lavatrastos Prymium</strong><br />
            3a. calle 3-54 boulevard San Cristóbal, zona 8 de Mixco, Guatemala<br />
            <a href="mailto:info@prymium.com">info@prymium.com</a>
          </address>
        </section>

      </div>
    </div>
  );
};

export default Privacy;
