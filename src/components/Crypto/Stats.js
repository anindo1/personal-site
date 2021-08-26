import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

const { PUBLIC_URL } = process.env;

function Stats() {
  const BTC = Math.round((11119 / 18311) * 100);
  const ADA = Math.round((2740 / 18311) * 100);
  const ETH = Math.round((1152 / 18311) * 100);
  const LINK = Math.round((1649 / 18311) * 100);
  const DOT = Math.round((916 / 18311) * 100);
  const MATIC = Math.round((729 / 18311) * 100);

  return (
    <div>
      <b>My current crypto portfolio distribution (as of August 25th, 2021):</b>
      <div style={{ height: '275px', width: '350px' }}>
        <ChartPie
          ariaDesc="My crypto portfolio distribution"
          ariaTitle="Crypto Holdings"
          data={[{ x: 'Bitcoin', y: BTC }, { x: 'Cardano', y: ADA }, { x: 'Chainlink', y: LINK },
            { x: 'Ethereum', y: ETH }, { x: 'Polkadot', y: DOT }, { x: 'Polygon', y: MATIC }]}
          height={230}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendData={[{ name: 'Bitcoin: 61%' }, { name: 'Cardano: 15%' },
            { name: 'Chainlink: 9%' }, { name: 'Ethereum: 6%' },
            { name: 'Polkadot: 5%' }, { name: 'Polygon: 4%' }]}
          legendOrientation="vertical"
          legendPosition="right"
          padding={{
            bottom: 20,
            left: 20,
            right: 140, // Adjusted to accommodate legend
            top: 20,
          }}
          themeColor={ChartThemeColor.multiOrdered}
          width={350}
        />
      </div>
      <b>My NFT <a href="https://opensea.io/Anindo">(opensea)</a> account value: ~0.6 eth = ~ $1929 USD. My favourite NFT collected:</b>
      <img height="300px" width="auto" src={`${PUBLIC_URL}/images/lion.jpg`} alt="" />
    </div>
  );
}

export default Stats;
