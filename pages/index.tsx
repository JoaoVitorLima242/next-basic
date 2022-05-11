import { GetStaticProps } from "next";
import { useEffect, useState } from "react"

export default function Home({repositories, date}) {
  return (
    <div>
      <h4>{date}</h4>
      <ul>
        {repositories.map((repo) => {
          return <li key={repo}>{repo}</li>
        })}
      </ul>
    </div>
  )
}

export const getStaticProps :GetStaticProps = async () => {
  const data = await(await fetch('https://api.github.com/users/JoaoVitorLima242/repos')).json();
  const repoNames = data?.map(item => item.name); 

  return {
    props :{
      repositories: repoNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  }
};
