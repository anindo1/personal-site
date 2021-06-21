import React from 'react';

function Stats() {
  return (
    <div>
      <p><b>Current Holdings:</b></p>
      <table>
        <tr>
          <th>Coin Name</th>
          <th>Average Price ($USD)</th>
          <th>Quantity</th>
          <th>Total Price ($USD)</th>
        </tr>
        <tr>
          <td>Cardano, ADA</td>
          <td>1.50</td>
          <td>1977.52</td>
          <td>2966</td>
        </tr>
        <tr>
          <td>Bitcoin, BTC</td>
          <td>35595</td>
          <td>0.08</td>
          <td>2795</td>
        </tr>
        <tr>
          <td>Ethereum, Eth</td>
          <td>0.99</td>
          <td>2002</td>
          <td>1982</td>
        </tr>
        <tr>
          <td>Chainlink, LINK</td>
          <td>22.07</td>
          <td>64.89</td>
          <td>1433</td>
        </tr>
      </table>
      <p>
        See current value of coins at
        <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">Coin Marketcap</a>.
        All coins purchased are in the top 20 marketcap of all crypto,
        {' '} so not much scrolling needed to see my losses :)
      </p>
    </div>
  );
}

export default Stats;
