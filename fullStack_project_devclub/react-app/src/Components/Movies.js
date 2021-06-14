import React from "react";
import "./Movies.css";

const Movies = (props) => {
    const AddToFavoritesComponent = props.favoriteComponent;
    return (
        <div className="mainContainer">
            <div className="movieContainer1">
                <img src={props.movieUrl}/>
            </div>
            <div className="movieContainer2">
                movie2
            </div>
            <div className="movieContainer3">
                movie3
            </div>
            <div className="movieContainer4">
                movie4
            </div>
        </div>
    );
};

export default Movies;


















// class Movies extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             color: "red",
//             model: "3",
//             brand: "mazda",
//             year: 1995
//         };
//     }
//     changeColor = () => {
//         this.setState({color: "blue"});
//     }

//     render(){
//         return (<div>
//                     <h2>I am a {this.state.color} Car!</h2>
//                     <button onClick={this.changeColor}>change color</button>

//                 </div>)
//     }
// }

// export default Movies;