export const Table = ({ data, width, height, name, ...props }) => {
  return (
    <>
      <h1>{name}</h1>
      <table style={{ width: width, height: height }}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Изображение</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>
                <img src={data.img} alt={data.name} />
              </td>
              <td>{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
