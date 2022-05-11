import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"

export default function Home({repos}) {
  const [repositories, setRepositories]= useState<string[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/JoaoVitorLima242/repos')
      .then((response) => response.json())
      .then((data) => {
        const repoNames = data?.map(item => item.name); 

        setRepositories(repoNames);
      });
  }, [])

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

