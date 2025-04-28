type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const getPost = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("fail to fetch data ");
  }
  return res.json();
};

export default async function Home() {
  const data = await getPost();
  return (
    <div className="overflow-scroll px-4 ">
      {data.map((item) => (
        <p className="break-word" key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
}
