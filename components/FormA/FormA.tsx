import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../Button";
import styles from "./form.module.scss";
import buttonStyles from "../Button/button.module.scss";
import { useDispatch } from "react-redux";
import { addAddress } from "../../states";

export const FormA = () => {
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

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    for (const key in formA) {
      if (formA[key] === null) {
        alert("PLEASE FILL ALL INPUTS");
        return;
      }
    }

    dispatch(addAddress(formA));
    router.push("/addresses/A");
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className={styles.form}>
      <div className={styles.form__section}>
        <label>A Name</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className={styles.form__section}>
        <label>A ID</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, id: e.target.value }))
          }
        />
      </div>
      <div className={styles.form__section}>
        <label>Latitude</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, lat: e.target.value }))
          }
        />
      </div>
      <div className={styles.form__section}>
        <label>Longitude</label>
        <input
          type="text"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, lng: e.target.value }))
          }
        />
      </div>

      <div className={styles.form__section}>
        <label>A Type</label>
        <select
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="TYPE 01">TYPE 01</option>
          <option value="TYPE 02">TYPE 02</option>
          <option value="TYPE 03">TYPE 03</option>
          <option value="TYPE 04">TYPE 04</option>
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
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip2: e.target.value }))
            }
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip3: e.target.value }))
            }
          />
          <input
            type="text"
            className={styles.ip__input}
            maxLength={3}
            onChange={(e) =>
              setFormA((prev) => ({ ...prev, ip4: e.target.value }))
            }
          />
        </div>
      </div>

      <div className={styles.form__section}>
        <input
          type="radio"
          name="option"
          id="Option1"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, option: e.target.id }))
          }
        />
        Option1
        <input
          type="radio"
          name="option"
          id="Option2"
          onChange={(e) =>
            setFormA((prev) => ({ ...prev, option: e.target.id }))
          }
        />
        Option2
        <input
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
          value="ADD"
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
