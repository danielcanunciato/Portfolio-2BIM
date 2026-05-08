class EcommerceSystem:
    def __init__(self):
        self.users = [];
        self.products = [];
        self.orders = [];
        
    def add_user(self, user):
        self.users.append(user);
        
    def add_prod(self, product):
        self.products.append(product);
        
    def place_order (self,user,product):
        if product in self.products:
            self.orders.append((user,product))
            return 'Order placed successfully.'
        return 'Product not available'
    
system = EcommerceSystem();
system.add_user("Maria")
system.add_prod("Celular")
print(system.place_order("Maria", "Celular"))

print([system.users, system.products, system.orders])