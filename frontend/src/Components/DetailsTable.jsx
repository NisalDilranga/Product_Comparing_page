import React from "react";

const DetailsTable = () => {
  return (
    <>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>NETWORK</th>
              <td>Technology</td>
              <td>GSM / CDMA / HSPA / CDMA2000 / LTE / 5G</td>
              <td>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
            </tr>
            <tr>
              <th>LAUNCH</th>
              <td>Announced</td>
              <td>
                2023, October 26,
                <p>Available. Released 2023, November 01</p>
              </td>
              <td>
                2023, September 12,
                <p>Available. Released 2023, November 01</p>
              </td>
            </tr>
            <tr>
              <th>BODY</th>
              <td>Dimensions</td>
              <td>152.8 x 71.5 x 8.2 mm or 8.3 mm</td>
              <td>159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailsTable;
