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
            margin-top: 0rem;
            padding: 0rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            --bs-bg-opacity: 1;
            background-color: rgba(
              var(--bs-light-rgb),
              var(--bs-bg-opacity)
            ) !important;
          }
          main {
            box-sizing: border-box;
            padding: 1rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }
          .title {
            font-family: font-sans-serif;
            text-align: center !important;
            box-sizing: border-box;
            margin-top: 0;
            font-size: calc(1.475rem + 2.7vw);
            margin-bottom: 1.5rem !important;
            line-height: 1 !important;
            margin: 0;
            line-height: 1.15;
            font-size: 2.45rem;
            text-align: center !important;
            margin-top: 0;
            margin-bottom: 1.5rem !important;
            line-height: 1 !important;
          }
          .title,
          .description {
            text-align: center;
          }
          .description {
            text-align: center !important;
            font-style: italic !important;
            margin-top: 1rem;
            font-size: 1.25rem;
            margin-bottom: 1rem !important;
            font-weight: 400 !important;
            color: #000000;
          }
        `}</style>
      </div>
    </>
  );
}

export default Services;
