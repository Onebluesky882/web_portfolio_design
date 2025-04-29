import NavigationTwo from "@/components/MenuMobile/Menu-Indicator";

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
  // get data from function getData
  const data = await getData();
  console.log("data :", data);
  return (
    <div>
      <NavigationTwo />
    </div>
  );
}
