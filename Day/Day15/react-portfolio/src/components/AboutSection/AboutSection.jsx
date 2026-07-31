import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Bhuvan Krishna S.K' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Bhuvan Krishna S.K, Computer Science Student, Aspiring Software Developer and solutions projects.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
