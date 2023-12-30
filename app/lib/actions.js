"use server";
//paling penting nih!, deklarasi server side di atas sini

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();
    //enscript password pake bcrypt, gini :
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    //kasih tau DB
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, taste, size } =
    Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      taste,
      size,
    });
    //kasih tau DB
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
