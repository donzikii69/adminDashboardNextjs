"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  //setting query buat jadi parameter search
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  //buat ngatur search params nya (ntar jadi search di endpoint)
  //use-debounce buat pending perubahan di component pas lagi search ,
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    //atur display page ke 1 (taip search, dan keluar hasil search nya, page akan di display dalam bentuk page 1)
    params.set("page", 1);

    if (e.target.value) {
      //atur huruf dalam 1x search (kalo baru 1 huruf jangan di jalanin searchnya dulu, ntar berat app nya)
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);
  // (300 ---> detik buat nunggu),ini biar DB gak kerja terus2an pas kita lagi searching

  // cek query nya nongol gak
  // console.log(searchParams);
  // console.log(pathname);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
