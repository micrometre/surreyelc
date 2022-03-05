
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
  min-height: 20vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
  text-align:center;
  color:black;
}

      `}</style>
    </div>
  )
}
