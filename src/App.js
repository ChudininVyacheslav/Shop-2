import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import chair_1 from "./img/furniture/chair_1.jpg";
import chair_3 from "./img/furniture/chair_3.jpg";
import table_1 from "./img/furniture/table_1.jpg";
import chair_2 from "./img/furniture/chair_2.jpg";
import table_2 from "./img/furniture/table_2.jpg";
import table_3 from "./img/furniture/table_3.jpg";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул бежевый",
          img: chair_1,
          desc: "Стул на металлокаркасе",
          category: "chairs",
          price: "50.00",
        },
        {
          id: 2,
          title: "Стул бежевый",
          img: chair_2,
          desc: "Замшевый",
          category: "chairs",
          price: "50.00",
        },
        {
          id: 3,
          title: "Стул синий",
          img: chair_3,
          desc: "Стул на металлокаркасе",
          category: "chairs",
          price: "50.00",
        },
        {
          id: 4,
          title: "Стол черный",
          img: table_1,
          desc: "Стол на металлокаркасе",
          category: "tables",
          price: "90.00",
        },
        {
          id: 5,
          title: "Стол черный",
          img: table_2,
          desc: "Стол металлический",
          category: "tables",
          price: "90.00",
        },
        {
          id: 6,
          title: "Стол белый",
          img: table_3,
          desc: "Стол на металлокаркасе",
          category: "tables",
          price: "90.00",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}
  chooseCategory(category) {
    if (category === "all") {
      this.setState({currentItems: this.state.items});
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter((el) => el.id !== id)});
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;
