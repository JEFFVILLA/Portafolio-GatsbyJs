import React, { useEffect, useState } from "react";
// import repos from "../data/repos";
import Repo from "./repo";
export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    useEffect(()=>{
        const data = sessionStorage.getItem("repos");
        let myrepos;
        if(data){
            myrepos = JSON.parse(data);

            setReposCount(myrepos.length);
            myrepos = myrepos.slice(1,13);
            return setRepos(myrepos);
        }
        async function fecthRepos(){
            const response = await fetch("https://api.github.com/users/jeffvilla/repos");
            myrepos = await response.json();
            setReposCount(myrepos.length);
            myrepos = myrepos.slice(1,13);
            setRepos(myrepos);
            sessionStorage.setItem("repos",JSON.stringify(myrepos));
        }
        fecthRepos();
    });
    return(
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Repositorio personal</h2>
                <p>Colaboración y contribución de Codigo:</p>

            </header>
        <ul className="repos-list">
            {
                repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
        <div className="mt-8 text-center">
            <a href="https://github.com/jeffvilla" className="btn" target="_blank" rel="noopener noreferrer">
                Ver mas en GitHub ({reposCount})
            </a>
        </div>
        </div>
    )
}