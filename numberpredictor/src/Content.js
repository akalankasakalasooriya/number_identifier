import './Content.css';
import logo from './logo.png';
import React, { useState } from 'react'
import axios from 'axios'


function Content() {
    const [userInfo, setuserInfo] = useState({
        file: [],
    });
    const fileSelectedHandler = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
        }
        )
        let subImg = document.getElementById("submittedImage");
        console.log(userInfo)
        let file = event.target.files[0]
        subImg.src = URL.createObjectURL(file)

    };
    const submit = async () => {
        const formdata = new FormData();
        formdata.append('imageNumber', userInfo.file);
        axios.post(
            "http://localhost:5000/numberFinder",
            formdata,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then(function (response) {
            let res = document.getElementById("result");
            res.innerHTML = response.data.return;
        }).catch(e => console.error(e));
    }
    return (
        <div className="jumbotron">
            <h1 className="display-4">Wellcome to number identifier</h1>
            <hr className="my-4" />
            <p>number identifier will convert hand written numeric images into numbers</p>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-sm">
                            <label for="imageSrc" className="sr-only">Upload image</label>
                        </div>
                        <div className="col-sm">
                            <input type="file" onChange={fileSelectedHandler} className="form-control" id="imageSrc" name="imageFile" accept="image/*" />
                        </div>
                        <div className="col-sm">
                            <button type="button" onClick={submit} className="btn btn-primary mb-2">Process</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row mx-auto">
                    <div className="card mx-auto cardStyle">
                        <div className="card-body">
                            <img className="card-img-top" id='submittedImage' src={logo} alt="Card cap"></img>
                            <h5 className="card-title">Result</h5>
                            <h2 id="result">#</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
