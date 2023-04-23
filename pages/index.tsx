import { InferGetServerSidePropsType, NextPage } from "next";
import { ReactChild } from "react";



const Test: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    if (data) {
        console.log(data);
    }
  return <div>ok welcome to /test route </div>;
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/hello`).then((res) =>
    res.json()
  );

  console.log(res);
  return {
    props: { data: res }, // will be passed to the page component as props
  };
}

export default Test;
