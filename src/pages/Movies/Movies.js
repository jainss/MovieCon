import React from 'react'
import axios from "axios";
import Genres from '../../components/Genres';
import './Movies.css'
import { useEffect, useState } from "react";
import useGenre from "../../Hooks/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from '../../components/SingleContent';

const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres)
    const [page, setPage] = useState(1);
    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=d13ab1839aef4d20bc565147ca6b05a7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setNumOfPages(data.total_pages);
        console.log(data);
        setContent(data.results);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
    }, [genreforURL, page]);
    return (
        <div className="container">
            <span className="pageTitle"> Best Movies </span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage} />
            <div className='trending'>
                {content && content.map((c) => (<SingleContent

                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type='movie'
                    vote_average={c.vote_average}
                />)
                )}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies