
function CopyRight ( ) {
 const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
<div className="copyright-container">
<main>
    <div className="container">
      <main className="main">
        <h1 className="title">
        </h1>
<p className="text-center" >Copyright ©{year} Painting and Decorating Services Ltd.</p>
      </main>
    </div>
</main>
<style jsx>{`
  .copyright-container{
    padding: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    padding-bottom: 0rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }
        .title  {
          color: #0070f3;
          text-decoration: none;
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.0rem;
        }
      `}</style>
    </div>
 );
};
export default CopyRight;
