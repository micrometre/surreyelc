export function EvChargingServices() {
  return (
    <div className="container">
      <main>
        <div className="grid">
          <div className="card">
            <p>
              We have a passion for helping homeowners make the most of cheaper
              environmentally friendly driving. Our fully qualified engineers
              install car charging ports for all makes and models of vehicles to
              an extremely high standard and safety level.
              
              </p>
          </div>

          <div className="card">
            <p>
              
              Our services offer complete regulation installation, certification
              and making good all damages from installation. Part of our brand
              is the ability to return damage caused by installation back to
              original condition with our in house rendering , plastering and
              decorating team.
              </p>
          </div>

          <div className="card">
            <p>
              
              We are registered to install Rolec, Pod Point and Zappi car
              charging units. But can install to all customers wants with some
              regulation.
              
              </p>
          </div>


          <div className="card">
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

        </div>
      </main>
      <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
  
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
  
  
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
    </div>
  )
}
export default EvChargingServices 