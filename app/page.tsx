import Draggable from "@/components/drag-drop";
import TestAos from "@/components/testAos";

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
    <div className="overflow-scroll">
      <TestAos />
      <Draggable />
      {data.map((item) => (
        <pre key={item.id}>{item.title}</pre>
      ))}
    </div>
  );
}
