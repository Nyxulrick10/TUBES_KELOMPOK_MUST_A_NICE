const readline = require("readline");
const ProductController = require("./controllers/ProductController");
const InventoryController = require("./controllers/InventoryController");
const OrderController = require("./controllers/OrderController");
const UserController = require("./controllers/UserController");

// Inisialisasi controller
const productController = new ProductController();
const inventoryController = new InventoryController();
const orderController = new OrderController();
const userController = new UserController();

// Buat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log(`
        1. Register
        2. Login
        3. Create Product
        4. View Inventory
        5. Create Order
        6. Exit
    `);
  rl.question("Choose an option: ", handleMenu);
};

const handleMenu = (choice) => {
  switch (choice) {
    case "1":
      rl.question("Enter name: ", (name) => {
        rl.question("Enter email: ", (email) => {
          rl.question("Enter password: ", (password) => {
            userController.register(name, email, password);
            console.log("User registered successfully");
            showMenu();
          });
        });
      });
      break;
    case "2":
      rl.question("Enter email: ", (email) => {
        rl.question("Enter password: ", (password) => {
          try {
            console.log(userController.login(email, password));
          } catch (error) {
            console.log(error.message);
          }
          showMenu();
        });
      });
      break;
    case "3":
      rl.question("Enter product name: ", (name) => {
        rl.question("Enter category: ", (category) => {
          rl.question("Enter price: ", (price) => {
            rl.question("Enter stock: ", (stock) => {
              const product = productController.createProduct(name, category, parseFloat(price), parseInt(stock, 10));
              inventoryController.addProduct(product);
              console.log("Product created and added to inventory");
              showMenu();
            });
          });
        });
      });
      break;
    case "4":
      console.log("Inventory:", inventoryController.getInventory());
      showMenu();
      break;
    case "5":
      const order = orderController.createOrder();
      rl.question("Enter product name to order: ", (productName) => {
        const product = productController.getProducts().find((p) => p.name === productName);
        if (product) {
          rl.question("Enter quantity: ", (quantity) => {
            orderController.addProductToOrder(order, product, parseInt(quantity, 10));
            console.log("Order created");
            console.log("Order Total:", orderController.getOrderTotal(order));
            console.log("Order Details:", orderController.getOrderDetails(order));
            showMenu();
          });
        } else {
          console.log("Product not found");
          showMenu();
        }
      });
      break;
    case "6":
      rl.close();
      break;
    default:
      console.log("Invalid option");
      showMenu();
  }
};

// Mulai aplikasi
showMenu();
