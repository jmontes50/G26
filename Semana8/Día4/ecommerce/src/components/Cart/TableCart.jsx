const TableCart = ({ headings, data, actions }) => {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((text, i) => (
            <th key={i}>
              {text}
            </th>
          ))}
          {actions ? <th>. . .</th> : null}
        </tr>
      </thead>
    </table>
  );
};

export default TableCart;
