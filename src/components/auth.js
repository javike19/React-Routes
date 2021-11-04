const users = [
    { email: "antonio@test.com", password: "123", name: "Antonio" },
    { email: "alberto@test.com", password: "456", name: "Alberto" },
    { email: "alvaro@test.com", password: "789", name: "Alvaro" },
  ];
  
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }