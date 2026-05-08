class UserServ:
    def __init__(self):
        self.users = [];
        
    def add_user(self, user : str):
        self.users.append(user);
        
class ProdServ:
    def __init__(self):
        self.products = [];
    
    def add_product(self, product : str):
        self.products.append(product);
    
    def check_availability(self, product : str):
        return product in self.products;
    
class OrderServ:
    def __init__(self):
        self.orders = [];
        
    def place_order(self, user : str, product : str, product_serv : function):
        
        if product_serv.check_availability(product):
            self.orders.append((user, product));
            
            return "Order placed successfully"
        
        return "Product not available"
    
user_serv = UserServ();
prod_serv = ProdServ();
order_serv = OrderServ();

user_serv.add_user("Maria");
prod_serv.add_product("Celular")
print(order_serv.place_order("Maria", "Celular", prod_serv));

print([user_serv.users, prod_serv.products, order_serv.orders]);