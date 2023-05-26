import { Input } from "../UIKit/Input/Input";
import { Button } from "../UIKit/Button/Button";
import styles from "./productForm.module.css";
import { useState } from "react";

export const ProductForm = () => {
  const initial = {
    name: "",
    price: 0,
    description: "",
    category: "",
    amount: 0,
  };
  const [product, setProduct] = useState(initial);

  //Валидация имени
  function validName(name) {
    var re = /^[A-ZА-ЯЁ]+$/i;
    var valid = re.test(name);
    return valid;
  }

  function validPrice(price) {
    var re = /^\d+(?:\.\d{1,2})$/;
    var valid = re.test(price);
    return valid;
  }
  function validNumb(price) {
    var re = /^[0-9]+$/;

    var valid = re.test(price);
    return valid;
  }

  return (
    <div className={styles.mainDiv}>
      <form className={styles.productMainForm}>
        <Input
          style={{ width: "100%" }}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
            const isValid = validName(e.target.value);
            if (isValid) {
              e.target.classList.remove("setRed");
            } else {
              e.target.classList.add("setRed");
            }
          }}
          name={"name"}
          placeholder={"Название"}
          id={"name"}
        />
        <Input
          style={{ width: "100%", marginTop: "10px" }}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
            const isValid = e.target.value.length > 0;
            if (isValid) {
              e.target.classList.remove("setRed");
            } else {
              e.target.classList.add("setRed");
            }
          }}
          name={"desc"}
          placeholder={"Описание"}
          id={"desc"}
        />
        <select className={styles.selectCategory}>
          <option value={""}>Категория...</option>
          <option value={"meet"}>Мясо</option>
          <option value={"milk"}>Молоко</option>
          <option value={"egg"}>Яйца</option>
        </select>
        <div className={styles.divPriceAmount}>
          <Input
            style={{ width: "140px" }}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
              const isValid = validPrice(e.target.value);
              if (isValid) {
                e.target.classList.remove("setRed");
              } else {
                e.target.classList.add("setRed");
              }
            }}
            name={"price"}
            placeholder={"Цена"}
            id={"price"}
          />
          <Input
            style={{ width: "140px" }}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
              const isValid = validNumb(e.target.value);
              if (isValid) {
                e.target.classList.remove("setRed");
              } else {
                e.target.classList.add("setRed");
              }
            }}
            name={"amount"}
            placeholder={"Кол-во товара"}
            id={"amount"}
          />
        </div>
        <Input
          style={{ width: "100%", marginTop: "10px" }}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
            const isValid = e.target.value.length > 0;
            if (isValid) {
              e.target.classList.remove("setRed");
            } else {
              e.target.classList.add("setRed");
            }
          }}
          name={"desc"}
          placeholder={"Дата возможного заказа"}
          id={"desc"}
        />
        <Button style={{ marginTop: "10px", width: "100%", padding: "14px" }}>
          Принять
        </Button>
      </form>
    </div>
  );
};
