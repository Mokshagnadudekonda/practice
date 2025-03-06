import React from 'react';

export default function BookMyShow() {
    const movieList = [{
        movie: "chhaava",
        genre: "Action/Drama/Historical",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1My42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg",
        price: 145
    },
    {
        movie: "Thandel",
        genre: "Action/Drama/Romantic",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA0MC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384012-lkcnqrjgfl-portrait.jpg",
        price: 145
    },
    {
        movie: "Laila",
        genre: "Action/Comedy/Romantic",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403539-ngqfstcmyy-portrait.jpg",
        price: 145
    },
    {
        movie: "captain America",
        genre: "Action/Adventure/Sci-fi",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICA1LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg",
        price: 145
    },
    {
        movie: "Brahma Anandam",
        genre: "Comedy/Drama",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4NzQgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430098-maendbjkqc-portrait.jpg",
        price: 145
    }]
    return (
        <>

            <div class="container-fluid mx-4 my-4">
                <div class="row">
                    {
                        movieList.map((copyOfMovieList) => {
                            const { movie, genre, image, price } = copyOfMovieList;
                            return (
                                <>

                                    <div class="col-2">
                                        <div class="card" >
                                            <img src={image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{movie}</h5>
                                                <p class="card-text">{genre}</p>
                                                <p class="card-text">{price}</p>
                                                <button class="btn btn-outline-secondary">Book Your Seats</button>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
