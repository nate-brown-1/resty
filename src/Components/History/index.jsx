import React from 'react';

// results functional component
function History(props) {
  return (
    <h3>History</h3>
    // <section>
    //   <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    // </section>
  );
}

// leave class component version for reference

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

export default History;
