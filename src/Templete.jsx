import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Templete() {
    const [getresponse, setResponse] = useState([])
    const [getOneresponse, setOneResponse] = useState({})


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&pageSize=4&language=en&apiKey=5beb0e243c904411960d3bc0e7a14add`).then((data) => {
        console.log("data.data.articles: ", data.data.articles)    
        setResponse(data.data.articles)
            setOneResponse(data.data.articles[0])
        }).catch((error) => {
            console.log("Error: ", error.response)
        })
    }, [])



    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{ fontSize: '12px'}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand text-danger fw-bold" href="#">Buletin</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="#">Stories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Creator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Subscribe</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{width:'140px'}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " style={{width:'139px'}}>
      <li class="nav-item fluid" style={{margin:'5px', width:'49px', display: 'inline-block', marginTop:'8px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" margin-right = '5px' fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>                                                         Write
        </li>
        <li class="nav-item" style={{margin:'5px', marginTop:'8px'}} >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>
        </li>
        <li class="nav-item" style={{margin:'5px'}}>
        <div class="gb_g gb_5a gb_Tf gb_A" border-radius='50%'><a class="gb_d gb_xa gb_A" aria-label="Google Account: Ratnesh  
(yratnesh5555@gmail.com)" href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://www.google.com%3Fhl%3Den-US&amp;ec=GBRA8wE" role="button" tabindex="0" target="_top" aria-expanded="false"><img class="gb_n gbii" src="https://lh3.googleusercontent.com/ogw/AGvuzYbDYdEl96nyNNkUkQBGpY4dCjcTpmCn5PiLT8Ia=s32-c-mo" srcset="https://lh3.googleusercontent.com/ogw/AGvuzYbDYdEl96nyNNkUkQBGpY4dCjcTpmCn5PiLT8Ia=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AGvuzYbDYdEl96nyNNkUkQBGpY4dCjcTpmCn5PiLT8Ia=s64-c-mo 2x " style={{borderRadius:"50%"}} alt="" aria-hidden="true" data-noaft=""/></a></div>
        </li>
      </ul>
    </div>
</nav>
            <div class="row justify-content-center text-center">
                <div class="col-lg-8 w-100">
                    <div class="news-card p-4 bg-secondary rounded-3 text-center">
                        <div class="news-heading text-center" style={{ fontSize: '12px'}}>
                            WELCOME     TO     BULETIN
                        </div>
                        <h4 class="mt-3 text-wrap w-100">Craft narratives that ignite <span class = "text-danger">inspirarion knowledge
                            </span> and <span class = "text-danger">entertainment</span></h4>
                    </div>
                </div>
            </div>
            {getresponse && getOneresponse && <div>
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <img src={getOneresponse?.urlToImage} alt="" style={{width: "auto", height: "380px"}} class="img-fluid rounded-3" />
                    </div>
                    <div class="col-lg-6">
                        <div class="news-card p-4">
                            <div class="single-list d-flex align-items-center">
                                <div class="list-icon" style={{ fontSize: '10px' }}>
                                    <img class="rounded-3"  src={getOneresponse?.urlToImage} style={{ "height": "30px" }} alt="" />
                                </div>
                                <h5 class="mb-0 ms-3">{getOneresponse.source?.name}</h5>
                                <p class="mb-0 ms-3">{Math.round(((new Date() - new Date(getOneresponse?.publishedAt) % 86400000) % 3600000) / 60000)}</p>
                                {/* ((new Date() - new Date(getOneresponse?.publishedAt))/86400000)/} */}
                            </div>

                            <h4 class="mt-3">{getOneresponse.title}</h4>
                            <p>
                                {getOneresponse.description}
                            </p>
                            <div>
                                <span class="text-danger">News</span>
                                <span class="text-muted"> 4 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="row ">
                        <h3 class="col-lg-6 text-start">Latest news</h3>
                        <p class="col-lg-6 text-end"> </p>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        {getresponse && getresponse.map((data) => (
                            <div class="col">
                                <div class="card" style={{height:'90vh'}}>
                                    <img src={data.urlToImage} class="img-fluid card-img-top " style={{height:'220px'}} alt="News Image" />
                                    <div class="card-body ">
                                        <div class="single-list d-flex align-items-center text-muted mb-2" style={{ fontSize: '10px' }}>
                                            <div class="list-icon">
                                                <img class="rounded-3" src={data.urlToImage} style={{ "height": "15px" }} alt="" />
                                            </div>
                                            <span class="mb-0 ms-2">{data.source.name}</span>
                                            <p class="mb-0 ms-2">{data.publishedAt}</p>
                                        </div>
                                        <h5 class="card-title">{data.title}</h5>
                                        <p class="card-text">{data.description}</p>
                                        <a href={data.url} class="btn btn-primary position-sticky">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
            }


        </div>

    )
}

export default Templete
