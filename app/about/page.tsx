import ToastTester from "@/components/test-toast";

const getData = async () => {
  // call api if have return res.json()
  const res = await fetch(
    "https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet"
  );
  if (!res.ok) {
    throw new Error("error to fetch data");
  }
  return res.json();
};

export default async function Page() {
  return (
    <div>
      <ToastTester />
      <button>about</button>
    </div>
  );
}
