import "./pricing.css";
export default function Pricing() {
  return (
    <>
      <header>
        <div className="head">
          <h1>Apex Nifty SDL debt fund</h1>
        </div>
      </header>

      <div className="Table">
        <body>
          <h2>
            1.12% <h6>return</h6>
          </h2>
          <h3>
            NAV 20 April 2023
            <table>
              <tr>
                <td>₹10.56</td>
              </tr>
            </table>
          </h3>
          <div className="p">
            <h6>Purchase with subscription(1 Year)</h6>
            <h6>Purchase with subscription(5 Year)</h6>
          </div>
          <div class="align-content-left  ">
            <a
              href="/request-demo"
              class="button-large w-button snipcss0-5-8-9"
            >
              Purchase
            </a>
            <a
              href="/request-demo"
              class="button-large w-button snipcss0-5-8-9"
            >
              Purchase
            </a>
            <a
              href="/request-demo"
              class="button-large w-button snipcss0-5-8-9"
            >
              Purchase
            </a>
          </div>
          {/* <div class="align-content-left  w-container snipcss0-4-4-8 ">
            <a
              href="/request-demo"
              class="button-large w-button snipcss0-5-8-9"
            >
              Purchase
            </a>
          </div> */}
        </body>
      </div>
    </>
  );
}
