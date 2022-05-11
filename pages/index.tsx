import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"

export default function Home({repositories}) {
  return (
    <div>
      <ul>
        {repositories.map((repo) => {
          return <li key={repo}>{repo}</li>
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps :GetServerSideProps = async () => {
  const data = await(await fetch('https://api.github.com/users/JoaoVitorLima242/repos')).json();
  const repoNames = data?.map(item => item.name); 

  return {
    props :{
      repositories: repoNames
    }
  }
};
