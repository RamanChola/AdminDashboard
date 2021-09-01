import "./widgetLg.scss";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/9160944/pexels-photo-9160944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="widgetLgUserImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/9160944/pexels-photo-9160944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="widgetLgUserImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/9160944/pexels-photo-9160944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="widgetLgUserImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/9160944/pexels-photo-9160944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="widgetLgUserImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
