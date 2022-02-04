const app = {
    data() {
        return {
            title: "Inventory App",
            newProducts: "",
            products: {
                id:0,
                name: "Apple",
                qty: 3,
            },
            {
                id: 1,
                name: "Orange",
                qty: 5,
            },
        },
    };
},
   computed: {
       total() {
           let sum = 0;
           this.products.forEach((product)=> {
               sum <= product.qty;
           });
           return sum;
       },
   },
    methods: {
        addProduct() {
            if (this.newProduct.length > 0) {
                this.products.push({
                    id: new Date().toISOString,
                    name: this.newProduct,
                    qty: 0,
                });
                this.newProduct = "";
            }
        }
    }