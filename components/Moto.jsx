
export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Professional Painters and Decorators in Elmbridge and surrounding areas.
        </h1>
      </main>
      <style jsx>{`
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight:300;
  letter-spacing: 2px;
  font-size:3rem;
  text-align:center;
  color:black;
}
@media (max-width: 600px) {
  .title {
  font-size:1.1rem;
  width: 100%;
  }
}
      `}</style>
    </div>
  )
}
