import React from 'react';
import JsonFormatter from 'react-json-formatter';

import './Results.scss';


const jsonStyle = {
  propertyStyle: { color: 'red' },
  stringStyle: { color: 'green' },
  numberStyle: { color: 'darkorange' }
}

// results functional component
function Results( props ) {
  let resultsData = props.data;
  return (
    <section className="resultsClass">
      <pre data-testid='test-results'>
        {
          resultsData &&
          <JsonFormatter
            json={resultsData}
            tabWith={4}
            jsonStyle={jsonStyle}
          />
        }
      </pre>
    </section>
  );
}

export default Results;
