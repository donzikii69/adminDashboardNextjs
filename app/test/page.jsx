//sekedar contoh, bagaimana bila kita mempraktekan server side pada project ini.
const Page = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("hello", username);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Page;
