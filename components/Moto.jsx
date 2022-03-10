
export default function Home() {
  return (
    <div className="logo-container">
      <main>
        <h1 className="title">
          Professional Painters and Decorators in Elmbridge and surrounding areas.
        </h1>
      </main>
      <style jsx>{`
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.title {
    font-family: font-sans-serif;
    text-align: center!important;
    box-sizing: border-box;
    margin-top: 1.15rem;
    letter-spacing: 2px;
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    margin-bottom: 1.5rem!important;
    line-height: 1!important;
}
@media (max-width: 600px) {
  .title {
  width: 100%;
  }
}
      `}</style>
    </div>
  )
}
