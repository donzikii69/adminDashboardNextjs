import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  //setting pagination di sini
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    //bikin query count data
    const count = await User.find({ username: { $regex: regex } }).count();
    //yang ini query khusus user
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  //setting pagination di sini
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    //bikin query count data
    const count = await Product.find({ title: { $regex: regex } }).count();
    //yang ini query khusus user
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
