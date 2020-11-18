import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesBar.css";

const categories = [
  "technology",
  "fashion",
  "beauty",
  "motors",
  "collectibles",
  "industrial",
  "sports",
  "home&garden",
];

class CreateCategoriesBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.categoryInput);
  };
  handleChange = (event) => {
    this.setState({ categoryInput: event });
  };

  render() {
    return (
      <div>

        <div className="categories-bar">
          {categories.map((category, index) => (
            <div className="button-container">
              <Link key={index} to={`/categories/${category}`}>
                <button
                  key={index}
                  className="button"
                  value={category}
                  onClick={(event) => this.props.onSearch(event.target.value)}
                >
                  {category}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CreateCategoriesBar;
