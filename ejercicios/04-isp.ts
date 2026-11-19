interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }

  fax(document: string): void {
    console.log(`Enviando fax: ${document}`);
  }
}

const simplePrinter = new SimplePrinter();
simplePrinter.print("tarea.txt");

const multiPrinter = new MultiFunctionPrinter();
multiPrinter.print("reporte.pdf");
multiPrinter.scan("foto.jpg");
multiPrinter.fax("contrato.pdf");
