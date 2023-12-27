import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Es Kopi Balik
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Es Kopi Balik" />
          <label>Price</label>
          <input type="number" name="price" placeholder="zikran@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="20" />
          <label>Taste</label>
          <input type="text" name="taste" placeholder="latte" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Jakarta" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="drink">Drink</option>
            <option value="food">Food</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
