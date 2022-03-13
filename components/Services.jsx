function Services() {
  return (
    <>
      <div className="services-container">
        <main>
          <h1 className="title">Services</h1>
          <p className="description">
            High Standard of painting, decorating and refurbishment across
            Elmbridge and surrounding areas. From internal and external to
            residential and commercial decoration, we cover it all.
          </p>
        </main>
        <style jsx>{`
          .services-container {
            min-height: 10vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            text-decoration: none;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

          }

          .title {
            text-decoration: none;
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .description {
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}

export default Services;
