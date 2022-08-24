import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../states";
import { Modal } from "../Modal";
import { SVG } from "../SVG";
import styles from "./table.module.scss";

const tableHeader = [
  "NAME",
  "ID",
  "LATITUDE",
  "LONGITUDE",
  "TYPE",
  "IP",
  "OPTION",
  "ACTION",
];

export const Table = ({ data = [] }) => {
  const [activeRow, setActiveRow] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteAddress = () => {
    dispatch(deleteAddress(activeRow));
    setShowModal(false);
    setActiveRow(-1);
  };

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleDeleteAddress()}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 &&
            data.map((dataItem, index) => (
              <tr
                className={activeRow === index && styles.active}
                key={index}
                onClick={() => setActiveRow(index)}
              >
                <td>{dataItem.name}</td>
                <td>{dataItem.id}</td>
                <td>{dataItem.lat}</td>
                <td>{dataItem.lng}</td>
                <td>{dataItem.type}</td>
                <td>
                  {dataItem.ip1 +
                    "." +
                    dataItem.ip2 +
                    "." +
                    dataItem.ip3 +
                    "." +
                    dataItem.ip4}
                </td>
                <td>{dataItem.option}</td>
                <td>
                  <div className={styles.table__actions}>
                    <div>
                      <SVG icon="edit" />
                    </div>

                    <div onClick={() => setShowModal(true)}>
                      <SVG icon="delete" />
                    </div>
                  </div>
                </td>
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
