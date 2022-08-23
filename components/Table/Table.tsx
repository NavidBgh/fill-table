import React from "react";
import styles from "./table.module.scss";

export const Table = ({ data = [] }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>NAME</td>
            <td>ID</td>
            <td>LATITUDE</td>
            <td>LONGITUDE</td>
            <td>TYPE</td>
            <td>IP</td>
            <td>OPTION</td>
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 &&
            data.map((dataItem, index) => (
              <tr>
                <td>{dataItem.name}</td>
                <td>{dataItem.id}</td>
                <td>{dataItem.latitude}</td>
                <td>{dataItem.longitude}</td>
                <td>{dataItem.type}</td>
                <td>{dataItem.ip}</td>
                <td>{dataItem.option}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {data?.length === 0 && (
        <div className={styles.empty}>NO ITEM FOUND IN TABLE</div>
      )}
    </>
  );
};
