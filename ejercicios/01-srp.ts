interface User {
  username: string;
  email: string;
}

class UserValidator {
  isValid(email: string): boolean {
    if (!email.includes("@")) {
      throw new Error("El correo no es valido");
    }
    return true;
  }
}

class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {
  public userValidator: UserValidator = new UserValidator();
  public userRepository: UserRepository = new UserRepository();
  public emailService: EmailService = new EmailService();

  newUser(username: string, email: string): User {
    this.userValidator.isValid(email);
    
    const user: User = { username, email };
    this.userRepository.save(user);
    this.emailService.sendWelcomeEmail(email);
    
    return user;
  }
}

const users = new UserRegistrationService();
const createdUser = users.newUser("Gonzalo", "gonzalo.rodriguez@gmail.com");
console.log("Usuario creado", createdUser);

