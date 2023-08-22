import React from "react";

const Gugudan = ({ startDan, endDan }) => {
  const tables = [];
  for (let dan = startDan; dan <= endDan; dan++) {
    const rows = [];
    for (let i = 1; i <= 9; i++) {
      rows.push(
        <tr key={i}>
          <td>{dan}</td>
          <td>x</td>
          <td>{i}</td>
          <td>=</td>
          <td>{dan * i}</td>
        </tr>
      );
    }

    tables.push(
      <div key={dan} className="gugudan">
        <h2>{dan}단</h2>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  return <div className="gugudan-container">{tables}</div>;
};

export default Gugudan;
