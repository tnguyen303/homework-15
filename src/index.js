import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

library.add(faUtensils);

const RecipeList = props => (
  <div>
    {props.recipeList.map((e, i) => (
      <RecipeCard name={e.name} key={i} />
    ))}
  </div>
);

const RecipeCard = props => <div className="recipe">{props.name}</div>;

const SearchForm = props => (
  <form>
    <input onChange={props.handleChange} placeholder="Search Text Here" />
    <button onClick={props.selectRecipes}>SEARCH</button>
  </form>
);

const DetailView = props => (
  <div>
    <h1>{props.selectedRecipe.name}</h1>
    <h2>Ingredients:</h2>
    <ul>
      {props.selectedRecipe.ingredients.map(e => (
        <li>{e}</li>
      ))}
    </ul>
  </div>
);

class App extends React.Component {
  state = {
    recipeList: [
      {
        id: 1,
        name: "Roasted turkey",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 2,
        name: "Fried pork",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 3,
        name: "Beef rice",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 4,
        name: "Lamb rice",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 5,
        name: "Turkey salad",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 6,
        name: "Cesar salad",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 7,
        name: "Duck soup",
        ingredients: ["duck", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      },
      {
        id: 8,
        name: "Beef pizza",
        ingredients: ["turkey", "mustard", "greens", "celery", "potato"],
        instructions: [
          "pre-heat over to 350",
          "tickle the turkey",
          "cut some celery"
        ]
      }
    ],
    searchVal: "",
    selectedRecipes: []
  };

  handleChange = event => {
    this.setState({ searchVal: event.target.value });
  };

  selectRecipes = event => {
    event.preventDefault();
    const recipesFiltered = this.state.recipeList.filter(
      e => e.name.toLowerCase().indexOf(this.state.searchVal) !== -1
    );
    this.setState({ selectedRecipes: recipesFiltered });
  };

  render() {
    return (
      <main>
        <div id="topbar" className="row">
          <FontAwesomeIcon className="fa-2x" icon="utensils" />
          <h1>RecipeApp</h1>
        </div>
        <div id="content" className="row">
          <div id="left-pane" classname="col">
            <SearchForm
              handleChange={this.handleChange}
              selectRecipes={this.selectRecipes}
              value={this.state.searchVal}
            />
            <RecipeList recipeList={this.state.selectedRecipes} />
          </div>
          <div id="right-pane" className="col">
            {this.state.selectedRecipes.length > 0 ? (
              <DetailView selectedRecipe={this.state.selectedRecipes[0]} />
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
