export default abstract class AbstractAction {
  public static getLabel() {}

  public static getInternalName() {}

  public static checkRights(
    userId: number,
    performerId: number,
    clientId: number,
  ) {}
}
