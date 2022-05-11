import { GetStaticProps } from "next";

export default function BlogPost({ date }) {
  return (
    <div>
        <h1>Hello!</h1>
      <h4>{date}</h4>
    </div>
  )
}

export const getStaticProps :GetStaticProps = async () => {
  return {
    props :{
      date: new Date().toISOString(),
    },
    revalidate: 5,
  }
};
