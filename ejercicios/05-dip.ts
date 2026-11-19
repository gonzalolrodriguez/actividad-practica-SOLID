interface Notifier {
  send(to: string, message: string): void;
}

class EmailNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo enviado a ${to}: ${message}`);
  }
}

class SmsNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS enviado a ${to}: ${message}`);
  }
}

class OrderService {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(customerContact: string): void {
    console.log("Pedido creado");
    this.notifier.send(customerContact, "Tu pedido fue creado");
  }
}

const emailOrderService = new OrderService(new EmailNotifier());
emailOrderService.createOrder("ana@example.com");

const smsOrderService = new OrderService(new SmsNotifier());
smsOrderService.createOrder("+5491122334455");
