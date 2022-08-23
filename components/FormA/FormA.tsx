import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../Button";
import styles from "./form.module.scss";

export const FormA = () => {
  const [formA, setFormA] = useState({
    name: null,
    id: null,
    lat: null,
    lng: null,
    type: "",
    ip: [null, null, null, null],
    option: null,
  });
  const router = useRouter();

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    // if(formA)
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <div className={styles.form__section}>
        <label>A Name</label>
        <input type="text" />
      </div>

      <div className={styles.form__section}>
        <label>A ID</label>
        <input type="text" />
      </div>

      <div className={styles.form__section}>
        <label>Latitude</label>
        <input type="text" />
      </div>

      <div className={styles.form__section}>
        <label>Longitude</label>
        <input type="text" />
      </div>

      <div className={styles.form__section}>
        <label>A Type</label>
        <input type="text" />
      </div>

      <div className={styles.form__section}>
        <label>A IP</label>
        <div>
          <input type="text" className={styles.ip__input} maxLength={3} />
          <input type="text" className={styles.ip__input} maxLength={3} />
          <input type="text" className={styles.ip__input} maxLength={3} />
          <input type="text" className={styles.ip__input} maxLength={3} />
        </div>
      </div>

      <Button title="ADD" color="primary" onClick={() => {}} />
      <Button
        title="TABLE"
        color="dark"
        onClick={() => router.push("/addresses")}
      />
    </form>
  );
};
