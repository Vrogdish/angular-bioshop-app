export class UserProfile {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public adress: string,
    public postalCode: string,
    public city: string,
    public country: string
  ) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.adress = adress),
      (this.postalCode = postalCode),
      (this.city = city),
      (this.country = country);
  }
}
