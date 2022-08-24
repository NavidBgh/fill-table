import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import styles from "./form.module.scss";
import buttonStyles from "../Button/button.module.scss";
import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "../../states";
import { useSelector } from "react-redux";

export const FormA = ({ query }) => {
  const [formA, setFormA] = useState({
    name: null,
    id: null,
    lat: null,
    lng: null,
    type: "TYPE 01",
    ip1: null,
    ip2: null,
    ip3: null,
    ip4: null,
    option: null,
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);
  const edited = query.edit && query.index;

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    for (const key in formA) {
      if (formA[key] === null) {
        alert("PLEASE FILL ALL INPUTS");
        return;
      }
    }

    if (edited) {
      handleUpdateForm();
      return;
    }

    dispatch(addAddress(formA));
    router.push("/addresses/A");
  };

  const handleUpdateForm = () => {
    dispatch(updateAddress(formA, query.index));
    router.push("/addresses/A");
  };

  useEffect(() => {
    if (edited) {
      setFormA(addresses[query.index]);
    }
  }, [query]);

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className={styles.form}>
      <div className={styles.form__section}>
        <label>A Name</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, name: e.target.value }))
          }
          value={formA.name}
        />
      </div>

      <div className={styles.form__section}>
        <label>A ID</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, id: e.target.value }))
          }
          value={formA.id}
        />
      </div>
      <div className={styles.form__section}>
        <label>Latitude</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, lat: e.target.value }))
          }
          value={formA.lat}
        />
      </div>
      <div className={styles.form__section}>
        <label>Longitude</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, lng: e.target.value }))
          }
          value={formA.lng}
        />
      </div>

      <div className={styles.form__section}>
        <label>A Type</label>
        <select
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="TYPE 01" selected={formA.type === "TYPE 01" && true}>
            TYPE 01
          </option>
          <option value="TYPE 02" selected={formA.type === "TYPE 02" && true}>
            TYPE 02
          </option>
          <option value="TYPE 03" selected={formA.type === "TYPE 03" && true}>
            TYPE 03
          </option>
          <option value="TYPE 04" selected={formA.type === "TYPE 04" && true}>
            TYPE 04
          </option>
        </select>
      </div>

      <div className={styles.form__section}>
        <label>A IP</label>
        <div>
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip1: e.target.value }))
            }
            value={formA.ip1}
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip2: e.target.value }))
            }
            value={formA.ip2}
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip3: e.target.value }))
            }
            value={formA.ip3}
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip4: e.target.value }))
            }
            value={formA.ip4}
          />
        </div>
      </div>

      <div className={styles.form__section}>
        <input
          checked={formA.option === "Option1" && true}
          type="radio"
          name="option"
          id="Option1"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, option: e.target.id }))
          }
        />
        Option1
        <input
          checked={formA.option === "Option2" && true}
          type="radio"
          name="option"
          id="Option2"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, option: e.target.id }))
          }
        />
        Option2
        <input
          checked={formA.option === "Option3" && true}
          type="radio"
          name="option"
          id="Option3"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, option: e.target.id }))
          }
        />
        Option3
      </div>

      <div className={styles.form__actions}>
        <input
          type="submit"
          value={edited ? "EDIT" : "ADD"}
          className={`${buttonStyles.button} ${buttonStyles.primary}`}
        />
        <Button
          title="TABLE"
          color="dark"
          onClick={() => router.push("/addresses/A")}
        />
      </div>
    </form>
  );
};
