import { GetServerSidePropsResult } from "next";

interface Props {
  data: string;
}

const Test = ({ data }: Props) => {
  return <div>{data}</div>;
};

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
  const res = await fetch(`http://localhost:3000/api/hello`).then(
    (res) => res.json()
  );

  return {
    props: { data: res },
  };
}
