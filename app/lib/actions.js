"use server";
//paling penting nih!, deklarasi server side di atas sini

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

//tambah user :
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

//update user yang udah ada (update user by id)
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//delete user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();
    //kasih tau DB
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete User!");
  }

  revalidatePath("/dashboard/products");
};

//tambah product ke db
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

//delete product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();
    //kasih tau DB
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

//update product yang udah ada (update product by id)
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, taste, size } =
    Object.fromEntries(formData);

  try {
    //koneksiin ke mongoDB(di oper dari /utils.js)
    connectToDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      taste,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
