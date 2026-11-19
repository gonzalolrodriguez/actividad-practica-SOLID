interface PaymentMethod {
  pay(amount: number): void;
}

class Card implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagó $${amount} con tarjeta`);
  }
}

class Cash implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagó $${amount} en efectivo`);
  }
}

class Transfer implements PaymentMethod{
  pay(amount: number): void {
    console.log(`Pagó $${amount} por transferencia`);
  }
}


class PaymentProcessor {
  pay(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}


const procesadorDePagos = new PaymentProcessor();
procesadorDePagos.pay(new Card(), 100);
procesadorDePagos.pay(new Cash(), 50);
procesadorDePagos.pay(new Transfer(), 200);