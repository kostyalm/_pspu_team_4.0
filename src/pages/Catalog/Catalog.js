import styles from "./Catalog.module.css";
import { useContext, useState, useEffect } from "react";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/UIKit/Button/Button";
import Header from "../../components/Header/Header";
import {Input} from "../../components/UIKit/Input/Input";
import ProductService from "../../services/product.service";
import {ProductCard} from "../../components/ProductCard/ProductCard";

export const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProd = async () => {
      const p = await ProductService.getAll();
      setProducts(p);
    }
    getProd();
  }, [products.length]);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <header className={styles.header}>
          <h3 className={styles.mainTitle}>КАТАЛОГ</h3>
          <span>Сначала дешевые</span>
        </header>
        <main className={styles.main}>


          <div className={styles.filters}>
            <h4 className={styles.title}>Фильтры</h4>
            
            <h5 className={styles.subtitle}>Категории</h5>
            <div className={styles.filterContainer}>
              <label className={styles.checkboxLabel} htmlFor={'meat'}>
                <input type={"checkbox"} id={"meat"}/>
                Мясо и птица
              </label>
              <label  className={styles.checkboxLabel} htmlFor={'milk'}>
                <input type={"checkbox"} id={"milk"}/>
                Молочные изделия
              </label>
              <label  className={styles.checkboxLabel} htmlFor={'vegetables'}>
                <input type={"checkbox"} id={"vegetables"}/>
                Овощи и фрукты
              </label>
              <label  className={styles.checkboxLabel} htmlFor={'bakaleya'}>
                <input type={"checkbox"} id={"bakaleya"}/>
                Бакалея
              </label>
              <label className={styles.checkboxLabel} htmlFor={'sweet'}>
                <input type={"checkbox"} id={"sweet"}/>
                Сладости
              </label>
              <label className={styles.checkboxLabel} htmlFor={'bake'}>
                <input type={"checkbox"} id={"bake"}/>
                Выпечка
              </label>
            </div>

            <h5 className={styles.subtitle}>Цена</h5>
            <div className={styles.priceContainer}>
              <Input placeholder={'От'} id={'from'}/>
              <Input placeholder={'До'} id={'to'}/>
            </div>

            <h5 className={styles.subtitle}>Фермер</h5>
            <div className={styles.filterContainer}>
              <label className={styles.checkboxLabel} htmlFor={'Vitya'}>
                <input type={'checkbox'} id={'Vitya'}/>
                Витя
              </label>
              <label className={styles.checkboxLabel} htmlFor={'Raisa'}>
                <input type={'checkbox'} id={'Raisa'}/>
                Раиса
              </label>
            </div>
            <div className={styles.buttonsContainer}>
              <Button>Применить</Button>
              <Button>Сбросить</Button>
            </div>
          </div>


          <div className={styles.catalog}>
            {products.map((p) =>
              <ProductCard key={p.id} product={p}/>
            ) }
          </div>
        </main>
        {/*<Footer />*/}
      </div>
    </>
  );
};
