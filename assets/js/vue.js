// data
const products = [
  {
    id: 1,
    name: "Trashy Blonde",
    price: 6,
    img: "https://images.punkapi.com/v2/2.png",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    abv: 4.1,
  },
  {
    id: 2,
    name: "Alpha Dog",
    price: 8,
    img: "https://images.punkapi.com/v2/14.png",
    tagline: "Existential Red Ale.",
    first_brewed: "02/2010",
    description:
      "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",
    abv: 4.5,
  },
  {
    id: 3,
    name: "Mixtape 8",
    price: 9,
    img: "https://images.punkapi.com/v2/15.png",
    tagline:
      "An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
    first_brewed: "01/2012",
    description:
      "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.",
    abv: 14.5,
  },
  {
    id: 4,
    name: "Pilsen Lager",
    price: 8,
    img: "https://images.punkapi.com/v2/4.png",
    tagline: "Unleash the Yeast Series.",
    first_brewed: "09/2013",
    description:
      "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
    abv: 6.3,
  },
  {
    id: 5,
    name: "Avery Brown Dredge",
    price: 6,
    img: "https://images.punkapi.com/v2/5.png",
    tagline: "Bloggers' Imperial Pilsner.",
    first_brewed: "02/2011",
    description:
      "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
    abv: 7.2,
  },
  {
    id: 6,
    name: "Electric India",
    price: 5,
    img: "https://images.punkapi.com/v2/6.png",
    tagline: "Vibrant Hoppy Saison.",
    first_brewed: "05/2013",
    description:
      "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
    abv: 5.2,
  },
  {
    id: 7,
    name: "AB:12",
    price: 7,
    img: "https://images.punkapi.com/v2/7.png",
    tagline: "Imperial Black Belgian Ale.",
    first_brewed: "07/2012",
    description:
      "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
    abv: 11.2,
  },
  {
    id: 8,
    name: "Fake Lager",
    price: 8,
    img: "https://images.punkapi.com/v2/8.png",
    tagline: "Bohemian Pilsner.",
    first_brewed: "03/2013",
    description:
      "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
    abv: 4.7,
  },
  {
    id: 9,
    name: "AB:07",
    price: 7,
    img: "https://images.punkapi.com/v2/9.png",
    tagline: "Whisky Cask-Aged Scotch Ale.",
    first_brewed: "03/2010",
    description:
      "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
    abv: 12.5,
  },
  {
    id: 10,
    name: "Bramling X",
    price: 9,
    img: "https://images.punkapi.com/v2/10.png",
    tagline: "Single Hop IPA Series - 2011.",
    first_brewed: "01/2011",
    description:
      "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
    abv: 7.5,
  },
  {
    id: 11,
    name: "Movember",
    price: 4,
    img: "https://images.punkapi.com/v2/13.png",
    tagline: "Moustache-Worthy Beer.",
    first_brewed: "11/2009",
    description:
      "A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.",
    abv: 4.5,
  },
  {
    id: 12,
    name: "Arcade Nation",
    price: 6,
    img: "https://images.punkapi.com/v2/12.png",
    tagline: "Seasonal Black IPA.",
    first_brewed: "12/2015",
    description:
      "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.",
    abv: 5.3,
  },
];
/* const wished = ["hello"]; */

const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      products: products,
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },

    itemTotalAmout() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity;
      }
      return total;
    },

    filteredList() {
      return this.products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get("likes"));
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
  },
  methods: {
    setLikeCookie() {
      console.log("Cookies Set");
      document.addEventListener("input", () => {
        setTimeout(() => {
          $cookies.set("likes", JSON.stringify(this.liked));
        }, 500);
      });
    },
    addToCart(product) {
      //check if already in arr
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    },

    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },

    cartRemoveItem(id) {
      this.$delete(this.cart, id);
    },

    cartMinusOne(product, id) {
      if (product.quantity === 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    // Function for wished
    addWished(beer) {
      for (let i = 0; i < wished.length; i++) {
        if (wished[i].id == beer.id) {
          return console.log("argu");
        }
        wished.push({
          id: beer.id,
          name: beer.name,
          img: beer.img,
          price: beer.price,
          tagline: beer.tagline,
          description: beer.description,
        });
      }

      this.setLikeCookie();
    },
  },
  mounted: () => {
    this.getLikeCookie;
  },
};

const UserSettings = {
  template: "<h1>User Settings</h1>",
  name: "UserSettings",
};

const WishList = {
  template: "#wishList",
  name: "WishList",
  data: () => {
    return {
      wished:[],
    };
  },
};

const ShoppingCart = {
  template: "<h1>Shopping Cart</h1>",
  name: "ShoppingCart",
};

// ROUTER

const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/user-settings", component: UserSettings, name: "UserSettings" },
    { path: "/wish-list", component: WishList, name: "WishList" },
    { path: "/shopping-cart", component: ShoppingCart, name: "ShoppingCart" },
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
